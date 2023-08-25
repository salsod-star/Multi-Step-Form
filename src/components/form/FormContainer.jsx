// eslint-disable-next-line react/prop-types
export default function FormContainer({ children }) {
  return (
    <div className="w-[91%] mx-auto rounded-lg bg-[#ffffff] py-9 px-6 shadow-lg max-sm:absolute -top-[76px] left-1/2 max-sm:-translate-x-1/2">
      {children}
    </div>
  );
}
