import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const SEOContent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Instant & Secure Generation",
      answer: (
        <>
          Create strong, uncrackable passwords instantly with our{" "}
          <strong>random password generator</strong>. All processing happens{" "}
          <strong>100% in your browser</strong> (client-side), meaning your
          secrets never leave your device. It's the safest way to generate
          credentials for your banking, email, and social media accounts.
        </>
      ),
    },
    {
      question: "Customizable & Flexible",
      answer: (
        <>
          Whether you need a <strong>complex 50-character password</strong>, a{" "}
          <strong>memorable passphrase</strong>, or a{" "}
          <strong>secure 6-digit PIN</strong>, we cover all use cases. Adjust
          length, toggle symbols, or use words—total control perfectly tailored
          to your security needs.
        </>
      ),
    },
    {
      question: "Why Password Strength Matters",
      answer: (
        <>
          Weak passwords like "password123" are cracked in seconds. Our tool
          uses <strong>cryptographically secure algorithms</strong> to ensure
          maximum entropy, helping you stay safe from brute-force attacks and
          data breaches.
        </>
      ),
    },
  ];

  return (
    <article
      style={{
        maxWidth: "800px",
        margin: "4rem auto 2rem",
        padding: "0 1.5rem",
        color: "var(--text-muted)",
        fontSize: "0.9rem",
        lineHeight: "1.6",
      }}
    >
      <h2
        style={{
          color: "var(--text-primary)",
          fontSize: "1.5rem",
          marginBottom: "1.5rem",
          textAlign: "center",
        }}
      >
        Why Use Password Generator Pro?
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {faqData.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "var(--neu-bg)",
              borderRadius: "12px",
              boxShadow: "var(--neu-shadow-small)",
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => toggleItem(index)}
              style={{
                width: "100%",
                padding: "1rem 1.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                color: "var(--text-secondary)",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              {item.question}
              {openIndex === index ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            {openIndex === index && (
              <div
                style={{
                  padding: "0 1.5rem 1.5rem",
                  color: "var(--text-muted)",
                  animation: "fadeIn 0.3s ease",
                }}
              >
                <p style={{ margin: 0 }}>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </article>
  );
};

export default SEOContent;
