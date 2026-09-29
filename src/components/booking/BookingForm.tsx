import React, { useState } from "react";
import {
  Car,
  Bike,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  Check,
} from "lucide-react";
import { BUSINESS_CONFIG } from "../../config/business";
import { analytics } from "../../utils/analytics";
import { Button } from "../common/Button";

export interface BookingFormData {
  vehicleType: "car" | "bike";
  brand: string;
  model: string;
  regNumber: string;
  serviceCategory: string;
  issueDetails: string;
  preferredDate: string;
  preferredTimeSlot: string;
  customerName: string;
  customerPhone: string;
  customerWhatsApp: string;
  dropOffPreference: "drive_in" | "pickup_query";
}

export const BookingForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<BookingFormData>({
    vehicleType: "car",
    brand: "",
    model: "",
    regNumber: "",
    serviceCategory: "Periodic General Service",
    issueDetails: "",
    preferredDate: "",
    preferredTimeSlot: "Morning (9:00 AM - 12:00 PM)",
    customerName: "",
    customerPhone: "",
    customerWhatsApp: "",
    dropOffPreference: "drive_in",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const carBrands = [
    "Maruti Suzuki",
    "Hyundai",
    "Tata",
    "Honda",
    "Mahindra",
    "Toyota",
    "Volkswagen",
    "Skoda",
    "Kia",
    "Ford",
    "Other",
  ];
  const bikeBrands = [
    "Royal Enfield",
    "Honda",
    "TVS",
    "Bajaj",
    "Yamaha",
    "KTM",
    "Suzuki",
    "Hero",
    "Jawa",
    "Other",
  ];

  const serviceCategories = [
    "Periodic General Service",
    "Brake System Service",
    "Engine & Transmission Diagnostics",
    "Suspension & Steering Repair",
    "Car AC Servicing & Gas Refill",
    "Denting & Painting / Scratch Repair",
    "Comprehensive Vehicle Health Inspection",
    "Other Mechanical / Electrical Issue",
  ];

  const timeSlots = [
    "Morning (9:00 AM - 12:00 PM)",
    "Afternoon (12:00 PM - 3:00 PM)",
    "Evening (3:00 PM - 6:00 PM)",
    "Late Evening (6:00 PM - 8:00 PM)",
  ];

  const validateCurrentStep = () => {
    const errs: { [key: string]: string } = {};

    if (currentStep === 1) {
      if (!formData.vehicleType)
        errs.vehicleType = "Please select a vehicle type";
    } else if (currentStep === 2) {
      if (!formData.brand.trim())
        errs.brand = "Please enter or select the vehicle brand";
      if (!formData.model.trim()) errs.model = "Please enter the vehicle model";
    } else if (currentStep === 3) {
      if (!formData.serviceCategory)
        errs.serviceCategory = "Please select a service category";
    } else if (currentStep === 5) {
      if (!formData.preferredDate)
        errs.preferredDate = "Please select your preferred date";
    } else if (currentStep === 6) {
      if (!formData.customerName.trim())
        errs.customerName = "Please enter your name";
      if (
        !formData.customerPhone.trim() ||
        formData.customerPhone.length < 10
      ) {
        errs.customerPhone = "Please enter a valid 10-digit phone number";
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      if (currentStep === 1) {
        analytics.trackBookingStart(
          formData.vehicleType,
          formData.serviceCategory,
        );
      }
      setCurrentStep((prev) => Math.min(prev + 1, 6));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateCurrentStep()) {
      analytics.trackBookingComplete(
        formData.vehicleType,
        formData.serviceCategory,
      );
      setIsSubmitted(true);
    }
  };

  const generateWhatsAppConfirmationMessage = () => {
    const text = `Hi Greeze Monkey Garage, I just submitted a service request on your website:
- Vehicle: ${formData.vehicleType.toUpperCase()} (${formData.brand} ${formData.model})
- Reg No: ${formData.regNumber || "Not specified"}
- Service: ${formData.serviceCategory}
- Preferred Date: ${formData.preferredDate} (${formData.preferredTimeSlot})
- Customer: ${formData.customerName} (${formData.customerPhone})
- Note: ${formData.issueDetails || "Standard Service"}

Please confirm availability for this slot.`;
    return BUSINESS_CONFIG.getWhatsAppUrl("booking", text);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white text-[#17191A] rounded-lg p-8 sm:p-12 border border-[#DDD9D0] max-w-2xl mx-auto text-center shadow-sm space-y-6">
        <div className="w-14 h-14 rounded-full bg-[#EFECE4] text-[#D97732] flex items-center justify-center mx-auto border border-[#DDD9D0]">
          <Check className="w-6 h-6 stroke-[3]" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D97732]">
            Request Received
          </span>
          <h3 className="text-2xl sm:text-3xl font-semibold font-heading text-[#17191A]">
            Thank you, {formData.customerName}
          </h3>
          <p className="text-sm text-[#6B6D69] max-w-md mx-auto leading-relaxed">
            Your service request for your{" "}
            <strong className="text-[#17191A] font-medium">
              {formData.brand} {formData.model}
            </strong>{" "}
            has been received. Our workshop team will contact you shortly to
            confirm the appointment.
          </p>
        </div>

        {/* Booking Summary Box */}
        <div className="bg-[#F7F5F0] p-5 rounded-lg border border-[#DDD9D0] text-left text-xs font-mono space-y-2 text-[#17191A]">
          <div className="flex justify-between border-b border-[#DDD9D0] pb-2">
            <span className="text-[#6B6D69]">Service:</span>
            <span className="font-semibold">{formData.serviceCategory}</span>
          </div>
          <div className="flex justify-between border-b border-[#DDD9D0] pb-2">
            <span className="text-[#6B6D69]">Slot:</span>
            <span>
              {formData.preferredDate} ({formData.preferredTimeSlot})
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6B6D69]">Contact:</span>
            <span>{formData.customerPhone}</span>
          </div>
        </div>

        {/* WhatsApp Instant Fast-Track */}
        <div className="pt-2 space-y-3">
          <p className="text-xs text-[#6B6D69]">
            Want instant confirmation right now? Tap below to send this summary
            to our workshop on WhatsApp:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="whatsapp"
              size="md"
              href={generateWhatsAppConfirmationMessage()}
              isExternal
              leftIcon={<MessageSquare className="w-4 h-4" />}
              className="text-xs"
            >
              Send on WhatsApp
            </Button>
            <Button
              variant="outline"
              size="md"
              href={BUSINESS_CONFIG.getTelUrl()}
              className="text-xs"
            >
              Call Garage
            </Button>
          </div>
        </div>

        <p className="text-[11px] text-[#6B6D69] font-mono">
          *No advance payment required. Estimates are approved by you upon
          initial physical inspection.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white text-[#17191A] rounded-lg border border-[#DDD9D0] shadow-sm overflow-hidden max-w-3xl mx-auto">
      {/* Progress Bar Header */}
      <div className="p-6 bg-[#F7F5F0] border-b border-[#DDD9D0]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#D97732]">
            Step {currentStep} of 6
          </span>
          <span className="text-xs font-mono text-[#6B6D69]">
            {currentStep === 1 && "Vehicle Type"}
            {currentStep === 2 && "Vehicle Details"}
            {currentStep === 3 && "Service Selection"}
            {currentStep === 4 && "Issue Details"}
            {currentStep === 5 && "Preferred Slot"}
            {currentStep === 6 && "Customer Contact"}
          </span>
        </div>

        {/* Step Indicator Dots */}
        <div className="grid grid-cols-6 gap-2">
          {[1, 2, 3, 4, 5, 6].map((st) => (
            <div
              key={st}
              className={`h-1 rounded-full transition-colors ${
                st <= currentStep ? "bg-[#D97732]" : "bg-[#DDD9D0]"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Form Steps */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6 text-left">
        {/* STEP 1: VEHICLE TYPE */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold font-heading text-[#17191A]">
                What type of vehicle do you need serviced?
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6D69] mt-1">
                We have dedicated diagnostic equipment and hydraulic hoists for
                both 4-wheelers and 2-wheelers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() =>
                  setFormData({ ...formData, vehicleType: "car", brand: "" })
                }
                className={`p-6 rounded-lg border text-left flex flex-col justify-between transition-all ${
                  formData.vehicleType === "car"
                    ? "border-[#D97732] bg-[#F7F5F0] text-[#17191A] shadow-sm"
                    : "border-[#DDD9D0] bg-white text-[#6B6D69] hover:border-[#17191A]"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded flex items-center justify-center ${
                      formData.vehicleType === "car"
                        ? "bg-[#17191A] text-white"
                        : "bg-[#EFECE4] text-[#17191A]"
                    }`}
                  >
                    <Car className="w-5 h-5" />
                  </div>
                  {formData.vehicleType === "car" && (
                    <span className="w-5 h-5 rounded-full bg-[#D97732] text-white flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-base text-[#17191A]">
                    Car / 4-Wheeler
                  </h4>
                  <p className="text-xs text-[#6B6D69] mt-1">
                    Hatchback, Sedan, SUV, Compact
                  </p>
                </div>
              </button>

              <button
                type="button"
                onClick={() =>
                  setFormData({ ...formData, vehicleType: "bike", brand: "" })
                }
                className={`p-6 rounded-lg border text-left flex flex-col justify-between transition-all ${
                  formData.vehicleType === "bike"
                    ? "border-[#D97732] bg-[#F7F5F0] text-[#17191A] shadow-sm"
                    : "border-[#DDD9D0] bg-white text-[#6B6D69] hover:border-[#17191A]"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded flex items-center justify-center ${
                      formData.vehicleType === "bike"
                        ? "bg-[#17191A] text-white"
                        : "bg-[#EFECE4] text-[#17191A]"
                    }`}
                  >
                    <Bike className="w-5 h-5" />
                  </div>
                  {formData.vehicleType === "bike" && (
                    <span className="w-5 h-5 rounded-full bg-[#D97732] text-white flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-base text-[#17191A]">
                    Bike / 2-Wheeler
                  </h4>
                  <p className="text-xs text-[#6B6D69] mt-1">
                    Motorcycle, Scooter, Royal Enfield
                  </p>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: VEHICLE DETAILS */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold font-heading text-[#17191A]">
                Enter your {formData.vehicleType === "car" ? "Car" : "Bike"}{" "}
                details
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6D69] mt-1">
                Helps our technicians verify OEM part and lubricant availability
                in advance.
              </p>
            </div>

            {/* Quick Brand Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-medium uppercase text-[#6B6D69]">
                Popular Brands:
              </label>
              <div className="flex flex-wrap gap-2">
                {(formData.vehicleType === "car" ? carBrands : bikeBrands).map(
                  (brand) => (
                    <button
                      key={brand}
                      type="button"
                      onClick={() => setFormData({ ...formData, brand })}
                      className={`px-3 py-1.5 rounded text-xs font-medium border transition-colors ${
                        formData.brand === brand
                          ? "bg-[#17191A] text-white border-[#17191A]"
                          : "bg-[#F7F5F0] text-[#17191A] border-[#DDD9D0] hover:border-[#17191A]"
                      }`}
                    >
                      {brand}
                    </button>
                  ),
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-[#6B6D69] mb-1.5">
                  Brand / Make *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Maruti, Hyundai, Royal Enfield"
                  value={formData.brand}
                  onChange={(e) =>
                    setFormData({ ...formData, brand: e.target.value })
                  }
                  className="w-full bg-[#F7F5F0] border border-[#DDD9D0] rounded px-4 py-2.5 text-sm text-[#17191A] focus:outline-none focus:border-[#D97732]"
                />
                {errors.brand && (
                  <p className="text-red-500 text-xs mt-1">{errors.brand}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#6B6D69] mb-1.5">
                  Model / Variant *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Swift VXi, Classic 350, i20 Asta"
                  value={formData.model}
                  onChange={(e) =>
                    setFormData({ ...formData, model: e.target.value })
                  }
                  className="w-full bg-[#F7F5F0] border border-[#DDD9D0] rounded px-4 py-2.5 text-sm text-[#17191A] focus:outline-none focus:border-[#D97732]"
                />
                {errors.model && (
                  <p className="text-red-500 text-xs mt-1">{errors.model}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-mono uppercase text-[#6B6D69] mb-1.5">
                  Vehicle Registration Number (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. KA-01-MJ-1234"
                  value={formData.regNumber}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      regNumber: e.target.value.toUpperCase(),
                    })
                  }
                  className="w-full bg-[#F7F5F0] border border-[#DDD9D0] rounded px-4 py-2.5 text-sm text-[#17191A] uppercase font-mono focus:outline-none focus:border-[#D97732]"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: SERVICE CATEGORY */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold font-heading text-[#17191A]">
                Select the primary service needed
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6D69] mt-1">
                You can select a general category — we conduct a full triage
                inspection on arrival.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {serviceCategories.map((cat) => {
                const isSelected = formData.serviceCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, serviceCategory: cat })
                    }
                    className={`p-3.5 rounded-lg border text-left flex items-center justify-between transition-colors ${
                      isSelected
                        ? "border-[#D97732] bg-[#F7F5F0] text-[#17191A] font-semibold"
                        : "border-[#DDD9D0] bg-white text-[#6B6D69] hover:border-[#17191A]"
                    }`}
                  >
                    <span className="text-xs sm:text-sm">{cat}</span>
                    {isSelected && (
                      <span className="w-4 h-4 rounded-full bg-[#D97732] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 4: ISSUE DETAILS */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold font-heading text-[#17191A]">
                Describe specific symptoms or requests
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6D69] mt-1">
                E.g. Brake squeaking, AC cooling weak, clutch hardness,
                vibration at 60 km/h, dent on left door.
              </p>
            </div>

            <div>
              <textarea
                rows={4}
                placeholder="Mention any abnormal noises, warning lights, or specific requests..."
                value={formData.issueDetails}
                onChange={(e) =>
                  setFormData({ ...formData, issueDetails: e.target.value })
                }
                className="w-full bg-[#F7F5F0] border border-[#DDD9D0] rounded px-4 py-2.5 text-sm text-[#17191A] focus:outline-none focus:border-[#D97732]"
              ></textarea>
            </div>

            {/* Drop-off choice */}
            <div className="p-4 rounded bg-[#F7F5F0] border border-[#DDD9D0] space-y-3">
              <label className="text-xs font-mono font-medium uppercase text-[#6B6D69]">
                Delivery Preference:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, dropOffPreference: "drive_in" })
                  }
                  className={`p-3 rounded border text-xs font-medium text-left ${
                    formData.dropOffPreference === "drive_in"
                      ? "border-[#D97732] bg-white text-[#17191A]"
                      : "border-[#DDD9D0] text-[#6B6D69] bg-white"
                  }`}
                >
                  🚗 I will bring vehicle to workshop
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      dropOffPreference: "pickup_query",
                    })
                  }
                  className={`p-3 rounded border text-xs font-medium text-left ${
                    formData.dropOffPreference === "pickup_query"
                      ? "border-[#D97732] bg-white text-[#17191A]"
                      : "border-[#DDD9D0] text-[#6B6D69] bg-white"
                  }`}
                >
                  📍 Check if doorstep pickup is available
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: PREFERRED DATE & TIME */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold font-heading text-[#17191A]">
                When would you like to bring your vehicle?
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6D69] mt-1">
                Workshop is open Monday to Saturday, 9:00 AM – 8:00 PM.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-[#6B6D69] mb-1.5">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredDate: e.target.value })
                  }
                  className="w-full bg-[#F7F5F0] border border-[#DDD9D0] rounded px-4 py-2.5 text-sm text-[#17191A] focus:outline-none focus:border-[#D97732]"
                />
                {errors.preferredDate && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.preferredDate}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#6B6D69] mb-1.5">
                  Time Window
                </label>
                <select
                  value={formData.preferredTimeSlot}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      preferredTimeSlot: e.target.value,
                    })
                  }
                  className="w-full bg-[#F7F5F0] border border-[#DDD9D0] rounded px-4 py-2.5 text-sm text-[#17191A] focus:outline-none focus:border-[#D97732]"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* STEP 6: CUSTOMER CONTACT */}
        {currentStep === 6 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold font-heading text-[#17191A]">
                Where should we send your estimate and WhatsApp updates?
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6D69] mt-1">
                We strictly use your number for service updates and itemized
                estimates. Zero promotional spam.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-[#6B6D69] mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.customerName}
                  onChange={(e) =>
                    setFormData({ ...formData, customerName: e.target.value })
                  }
                  className="w-full bg-[#F7F5F0] border border-[#DDD9D0] rounded px-4 py-2.5 text-sm text-[#17191A] focus:outline-none focus:border-[#D97732]"
                />
                {errors.customerName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.customerName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#6B6D69] mb-1.5">
                  Mobile Number (Calling & WhatsApp) *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 9876543210"
                  value={formData.customerPhone}
                  onChange={(e) =>
                    setFormData({ ...formData, customerPhone: e.target.value })
                  }
                  className="w-full bg-[#F7F5F0] border border-[#DDD9D0] rounded px-4 py-2.5 text-sm text-[#17191A] focus:outline-none focus:border-[#D97732]"
                />
                {errors.customerPhone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.customerPhone}
                  </p>
                )}
              </div>
            </div>

            {/* Reassurance banner */}
            <div className="p-4 rounded bg-[#F7F5F0] border border-[#DDD9D0] flex items-start gap-3">
              <div className="text-xs text-[#6B6D69]">
                <strong className="text-[#17191A] font-medium block">
                  Transparency Guarantee:
                </strong>
                You will receive a clear itemized quote before work starts. Zero
                repairs are undertaken without your explicit confirmation.
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="pt-6 border-t border-[#DDD9D0] flex items-center justify-between">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2 rounded bg-white text-xs font-mono font-medium text-[#17191A] hover:bg-[#F7F5F0] border border-[#DDD9D0] flex items-center gap-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back
            </button>
          ) : (
            <div></div>
          )}

          {currentStep < 6 ? (
            <Button
              type="button"
              variant="primary"
              size="md"
              onClick={handleNext}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="text-xs"
            >
              Continue
            </Button>
          ) : (
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="text-xs"
            >
              Submit Service Request
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};
