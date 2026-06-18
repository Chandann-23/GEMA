import { useState } from 'react';
import { Send, Loader2, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [apiErrorMessage, setApiErrorMessage] = useState('');

  // Local real-time validation
  const validateField = (name: string, value: string) => {
    let error = '';
    if (name === 'name') {
      if (!value.trim()) error = 'Name is required';
      else if (value.trim().length < 2) error = 'Name must be at least 2 characters';
    }
    if (name === 'email') {
      if (!value.trim()) error = 'Email is required';
      else if (!/^\S+@\S+\.\S+$/.test(value.trim())) error = 'Please enter a valid email address';
    }
    if (name === 'phone') {
      if (!value.trim()) error = 'Phone number is required';
      else if (!/^\d{10,12}$/.test(value.trim().replace(/[\s\-()+]/g, ''))) {
        error = 'Phone number must be between 10 and 12 digits';
      }
    }
    if (name === 'age') {
      if (!value) error = 'Child\'s age is required';
      else {
        const numAge = parseInt(value, 10);
        if (numAge < 8 || numAge > 14) error = 'Age must be between 8 and 14';
      }
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate on change
    const fieldError = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: fieldError,
    }));
  };

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#6366f1', '#f97316', '#10b981']
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#6366f1', '#f97316', '#10b981']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const formErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        formErrors[key] = error;
      }
    });

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      // Scroll to first error
      const firstError = Object.keys(formErrors)[0];
      const element = document.getElementById(firstError);
      element?.focus();
      return;
    }

    setIsSubmitting(true);
    setApiErrorMessage('');
    
    try {
      const apiUrl = (import.meta.env.VITE_API_URL || 'http://localhost:5000') + '/api/enquiry';
      
      const payload = {
        ...formData,
        age: parseInt(formData.age, 10),
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        triggerConfetti();
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          age: '',
          message: '',
        });
        setErrors({});
      } else {
        setSubmitStatus('error');
        // Handle server-side validation error array
        if (result.errors && Array.isArray(result.errors)) {
          const apiErrors: Record<string, string> = {};
          result.errors.forEach((err: any) => {
            apiErrors[err.field] = err.message;
          });
          setErrors(apiErrors);
          setApiErrorMessage('Please correct the validation errors in the form.');
        } else {
          setApiErrorMessage(result.message || 'Failed to submit registration. Please try again.');
        }
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      setSubmitStatus('error');
      setApiErrorMessage('Connection refused. Is the backend API server running on port 5000?');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-12 items-stretch">
          
          {/* Form Left Content */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-xs font-bold text-accent-600 uppercase tracking-widest bg-accent-50 px-3 py-1 rounded-full">
                Secure Enrollment
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mt-4 mb-4">
                Reserve a Seat for Your Child
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Fill out the enrollment form to initiate registration. Our camp coordinators will contact you via Phone & Email within 24 hours to finalize details and answer schedule preferences.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl bg-slate-50 p-6 border border-slate-100">
              <h3 className="font-bold text-slate-800 text-sm">Enrollment guarantees:</h3>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>4 weeks of interactive online instruction</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>All digital workspace simulator access</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>Interactive graduation project presentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>GEMA robotics course completion certificate</span>
                </li>
              </ul>
            </div>
            
            <div className="hidden lg:block text-[11px] text-slate-400">
              * Privacy promise: We never sell or share your phone number or email address with outside brokers. 100% kid-safe.
            </div>
          </div>

          {/* Form Right Area */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 shadow-sm">
              
              {/* Success Screen */}
              {submitStatus === 'success' && (
                <div className="text-center py-8 space-y-6">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 animate-bounce-slow">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-slate-900">Seat Reserved Successfully!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Congratulations! Your registration enquiry has been successfully logged. We have sent a confirmation email outlining the session timings and payment details.
                    </p>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-primary-700 focus:outline-none"
                    >
                      <Sparkles className="h-4 w-4" />
                      Register Another Student
                    </button>
                  </div>
                </div>
              )}

              {/* Form Input Screen */}
              {submitStatus !== 'success' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* General Error Banner */}
                  {apiErrorMessage && (
                    <div className="rounded-xl bg-rose-50 border border-rose-100 p-4 flex gap-3 text-rose-700 text-xs items-center">
                      <ShieldAlert className="h-5 w-5 shrink-0 text-rose-500" />
                      <div>{apiErrorMessage}</div>
                    </div>
                  )}

                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Parent's / Student's Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all ${
                        errors.name ? 'border-rose-500 focus:ring-rose-500/20 focus:border-rose-500' : 'border-slate-200'
                      }`}
                    />
                    {errors.name && <span className="text-xs text-rose-500 block">{errors.name}</span>}
                  </div>

                  {/* Email and Phone Grid */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="e.g. john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all ${
                          errors.email ? 'border-rose-500 focus:ring-rose-500/20 focus:border-rose-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.email && <span className="text-xs text-rose-500 block">{errors.email}</span>}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all ${
                          errors.phone ? 'border-rose-500 focus:ring-rose-500/20 focus:border-rose-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.phone && <span className="text-xs text-rose-500 block">{errors.phone}</span>}
                    </div>
                  </div>

                  {/* Child's Age Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="age" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Child's Age (8 to 14 Years) <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all ${
                        errors.age ? 'border-rose-500 focus:ring-rose-500/20 focus:border-rose-500' : 'border-slate-200'
                      }`}
                    >
                      <option value="">-- Select Child's Age --</option>
                      {[8, 9, 10, 11, 12, 13, 14].map(ageVal => (
                        <option key={ageVal} value={ageVal}>
                          {ageVal} Years Old
                        </option>
                      ))}
                    </select>
                    {errors.age && <span className="text-xs text-rose-500 block">{errors.age}</span>}
                  </div>

                  {/* Optional Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Optional Questions / Special Requests
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="e.g. Schedule preferences, learning requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-primary-600/10 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50 transition-all duration-150 active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Submitting Enquiry...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Submit Registration
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
