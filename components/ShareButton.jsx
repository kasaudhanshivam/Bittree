"use client"; // important

export default function ShareButton() {
  const handleShare = async () => {
    const url = window.location.href;
    const shareData = {
      title: "Check out my profile on Bittree!",
      text: "Bittree is a simple and elegant link-in-bio tool to showcase all your links in one place.",
      url: url
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        console.log("Shared successfully!");
      } else {
        alert("Sharing not supported on this browser 😢");
      }
    } catch (err) {
      console.error("Share failed:", err.message);
    }
  };

  return (
    <button
      className="mt-5 bg-gray-800 rounded-full p-3 px-4 ml-2 text-white"
      onClick={handleShare}
    >
      Share your Bittree 
    </button>
  );
}
