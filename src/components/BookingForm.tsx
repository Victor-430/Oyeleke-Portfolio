import React, { useState } from "react";
import { Calendar as CalendarIcon, Clock, Mail } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Slide, toast } from "react-toastify";

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingForm = ({ isOpen, onClose }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: undefined as Date | undefined,
    time: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.description ||
      !formData.date ||
      !formData.time
    ) {
      toast.error("Please fill in all required field", {
        transition: Slide,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const appointmentDateTime = `${format(formData.date, "PPP")} at ${formData.time}`;

      // Create mailto link with booking details
      const subject = encodeURIComponent(`Booking Request: ${formData.title}`);
      const body = encodeURIComponent(`
New Booking Request

Title: ${formData.title}

Description:
${formData.description}

Requested Date & Time: ${appointmentDateTime}

Please confirm this appointment at your earliest convenience.

Best regards
      `);

      const mailtoLink = `mailto:your@email.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      toast.info("Please send the email to complete your request.", {
        transition: Slide,
      });

      // Reset form
      setFormData({
        title: "",
        description: "",
        date: undefined,
        time: "",
      });

      onClose();
    } catch (error) {
      toast.error("Failed to create booking request. Please try again.", {
        transition: Slide,
      });
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="border-[#5C8374] bg-[#1B4242] sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="bg-gradient-to-r from-[#5C8374] to-[#9EC8B9] bg-clip-text text-2xl font-bold text-transparent">
            Book an Appointment
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Title *
            </label>
            <Input
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="e.g., Project Discussion, Consultation"
              className="border-[#5C8374] bg-[#092635] text-white placeholder:text-gray-400"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Description *
            </label>
            <Textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Please describe what you'd like to discuss or the purpose of this meeting"
              className="min-h-[100px] border-[#5C8374] bg-[#092635] text-white placeholder:text-gray-400"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Date *
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start border-[#5C8374] bg-[#092635] text-left font-normal text-white hover:bg-[#1B4242]",
                      !formData.date && "text-gray-400",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.date
                      ? format(formData.date, "PPP")
                      : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto border-[#5C8374] bg-[#1B4242] p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={formData.date}
                    onSelect={(date) => setFormData({ ...formData, date })}
                    disabled={(date) => date < new Date()}
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Time *
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start border-[#5C8374] bg-[#092635] text-left font-normal text-white hover:bg-[#1B4242]",
                      !formData.time && "text-gray-400",
                    )}
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    {formData.time || "Select time"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto border-[#5C8374] bg-[#1B4242] p-2"
                  align="start"
                >
                  <div className="grid max-h-48 grid-cols-3 gap-2 overflow-y-auto">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant="ghost"
                        className="text-white hover:bg-[#5C8374] hover:text-white"
                        onClick={() => setFormData({ ...formData, time })}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-[#5C8374] bg-[#1B4242] text-white hover:bg-[#5C8374]"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 border-[#5C8374] bg-[#1B4242] text-white hover:bg-[#5C8374]"
            >
              {isSubmitting ? (
                <>
                  <Mail className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Mail className="mr-2 h-4 w-4" />
                  Send Booking Request
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;
