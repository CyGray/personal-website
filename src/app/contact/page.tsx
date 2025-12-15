"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/TextArea";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    setStatus("loading");
    setError(null);
    const payload = {
      name: (formData.get("name") as string) || "",
      email: (formData.get("email") as string) || "",
      message: (formData.get("message") as string) || "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
    } catch (err) {
      console.error("Contact form error", err);
      setStatus("error");
      setError("Could not send right now. Please try again shortly.");
    }
  };

  return (
    <main className="py-12 sm:py-16">
      <Container>
        <div className="mb-8">
          <p className="text-sm text-[#9CA3AF]">Contact</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Let's build something</h1>
          <p className="mt-3 max-w-2xl text-[#9CA3AF]">
            If you're not sure what to write, use the quote builder — it'll guide you through the basics.
          </p>
        </div>

        <Card className="max-w-2xl p-6">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              await handleSubmit(formData);
            }}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Input label="Name" name="name" required placeholder="Your name" />
              <Input label="Email" name="email" type="email" required placeholder="you@company.com" />
            </div>
            <Textarea
              label="Message"
              name="message"
              required
              placeholder="What are you trying to build? Any links or context helps."
              rows={6}
            />
            {status === "success" && <p className="text-sm text-green-400">Thanks! Your message was sent.</p>}
            {status === "error" && <p className="text-sm text-red-400">{error}</p>}
            <div className="flex flex-wrap gap-3">
              <Button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending…" : "Send message"}
              </Button>
              <Button href="/quote" variant="secondary">
                Use quote builder instead
              </Button>
            </div>
          </form>
        </Card>
      </Container>
    </main>
  );
}
