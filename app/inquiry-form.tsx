"use client";
import { useState, type FormEvent } from "react";
export default function InquiryForm() {
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [whatsapp, setWhatsapp] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const response = await fetch("/api/inquiries", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(data) });
      if (!response.ok) throw new Error("Unable to submit");
      setWhatsapp(`https://wa.me/917888111024?text=${encodeURIComponent(`Hello Civil Daddy, I have a ${data.service} project in ${data.location}. My name is ${data.name}, phone ${data.phone}. ${data.details || ""}`)}`);
      setStatus("success"); form.reset();
    } catch { setStatus("error"); }
  }
  return <div className="form-panel"><div className="form-top"><span>01 / 02</span><span>YOUR PROJECT DETAILS</span></div><h3>Tell us what<br/>you have in mind.</h3><p className="form-lead">A few details help us understand your project.</p>
    {status === "success" ? <div className="form-message success" role="status"><h4>Thank you — your enquiry is saved.</h4><p>We have your project details. You can also send them directly on WhatsApp for a quicker conversation.</p><a className="button button-primary" href={whatsapp} target="_blank" rel="noopener noreferrer">Continue on WhatsApp ↗</a><button type="button" onClick={()=>setStatus("idle")}>Send another enquiry</button></div> :
    <form onSubmit={submit}><div className="form-row"><label>Full name <span>*</span><input name="name" autoComplete="name" placeholder="Your name" required maxLength={100}/></label><label>Phone number <span>*</span><input name="phone" autoComplete="tel" inputMode="tel" placeholder="+91" required minLength={8} maxLength={20}/></label></div><div className="form-row"><label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={150}/></label><label>Project location <span>*</span><input name="location" placeholder="e.g. Panaji, Goa" required maxLength={120}/></label></div><label>What do you need help with? <span>*</span><select name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Interior design</option><option>Civil & renovation</option><option>Custom furniture</option><option>False ceilings</option><option>3D visualisation</option><option>Not sure yet</option></select></label><label>Tell us about your project<textarea name="details" rows={3} placeholder="Space, ideas, approximate timeline or anything useful" maxLength={1500}/></label><label className="consent"><input type="checkbox" required/><span>I agree to be contacted by Civil Daddy about this enquiry.</span></label><div className="form-footer"><button className="button button-dark" disabled={status==="sending"} type="submit">{status==="sending"?"Sending…":"Send enquiry"}<span>↗</span></button><span>We’ll only use your details to respond to your enquiry.</span></div>{status==="error"&&<p className="form-error" role="alert">We couldn’t save your enquiry. Please try again, or call us directly.</p>}</form>}
  </div>;
}
