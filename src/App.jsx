import React from "react";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/Section2/section2";

const App = () => {
  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661641231090-881e2a6a6485?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
      intro:
        "Enhance loyalty through seamless and personalized digital banking experiences.",
      color: "#2563EB",
      tag: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661722273422-8d1723e8f905?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Expand financial access with inclusive and customer-focused banking solutions.",
      color: "#F97316",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661775907671-3b51f2dafd78?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Bridge financial gaps through accessible and modern digital services.",
      color: "#059669",
      tag: "Underbanked",
    },
    {
      img: "https://images.unsplash.com/photo-1571365689578-618663443bd7?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Help customers achieve financial confidence with smarter banking tools.",
      color: "#7C3AED",
      tag: "Empowered",
    },
    {
      img: "https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
      intro: "Deliver secure and trusted banking experiences for modern users.",
      color: "#DC2626",
      tag: "Protected",
    },
    {
      img: "https://images.unsplash.com/photo-1749880164389-e14710d2f397?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYyfHx8ZW58MHx8fHx8",
      intro:
        "Create seamless financial ecosystems through intelligent digital integration.",
      color: "#0891B2",
      tag: "Connected",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1663134310533-fc3b59225810?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Support customer growth with scalable and insight-driven financial solutions.",
      color: "#CA8A04",
      tag: "Growing",
    },
    {
      img: "https://images.unsplash.com/photo-1733348137613-90f1af8674fd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Drive long-term success through innovative and personalized banking services.",
      color: "#BE185D",
      tag: "Thriving",
    },
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Empower users with flexible tools designed for modern financial lifestyles.",
      color: "#0F766E",
      tag: "Enabled",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1669686966156-1018b1705979?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
      intro:
        "Transform digital banking with forward-thinking and customer-centric experiences.",
      color: "#9333EA",
      tag: "Innovative",
    },
  ];

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
