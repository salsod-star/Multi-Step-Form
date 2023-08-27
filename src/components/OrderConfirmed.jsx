import thankYouIcon from "../assets/images/icon-thank-you.svg";

function OrderConfirmed() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <img src={thankYouIcon} alt="thank you icon" />
      <h2 className="text-[#02295a] font-bold text-2xl">Thank you!</h2>
      <p className="my-4 text-[#9699ab] font-semibold">
        Thanks for confirming your subscription! We hope you have fun using our platform.
        If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
}

export default OrderConfirmed;
