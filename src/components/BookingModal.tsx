import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    website: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      if (!formData.name || !formData.email) {
        toast.error("Please fill in all required fields");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!formData.business) {
        toast.error("Please tell us about your business");
        return;
      }
      setStep(3);
      
      // Simulate successful booking
      setTimeout(() => {
        toast.success("Audit booked successfully! We'll contact you soon.");
        setTimeout(() => {
          onOpenChange(false);
          setStep(1);
          setFormData({ name: "", business: "", email: "", website: "", message: "" });
        }, 2000);
      }, 1000);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-card/95 backdrop-blur-sm border-2 border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Calendar className="h-4 w-4 text-primary-foreground" />
            </div>
            Book Your Free Audit
          </DialogTitle>
          <DialogDescription>
            Let's understand your business needs and find automation opportunities
          </DialogDescription>
        </DialogHeader>

        {step < 3 ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Progress indicator */}
            <div className="flex gap-2">
              <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-muted'}`} />
              <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="business">Business Name *</Label>
                  <Input
                    id="business"
                    placeholder="Your Business Name"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="website">Website (Optional)</Label>
                  <Input
                    id="website"
                    type="url"
                    placeholder="https://yourbusiness.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">What would you like to automate?</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your automation needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>
              </div>
            )}

            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
              {step === 1 ? "Continue" : "Book Free Audit"}
            </Button>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-float">
                <CheckCircle2 className="h-10 w-10 text-primary-foreground" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground">Booking Confirmed!</h3>
            <p className="text-muted-foreground">
              Thank you, {formData.name}! We'll contact you at {formData.email} to schedule your free audit.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
