export default function MenuBar({ className, darkClassName, openNav }) {
    return (
        <svg width="37" height="31" viewBox="0 0 37 31" fill="none" xmlns="http://www.w3.org/2000/svg" className={`cursor-pointer inline fill-deep-sky-blue mx-2 ${className ? className : "w-[45px] h-[43px]"
            }`} onClick={openNav}>
            <path d="M0 3.3125C0 1.96654 1.1835 0.875 2.64286 0.875H34.3571C35.819 0.875 37 1.96654 37 3.3125C37 4.66074 35.819 5.75 34.3571 5.75H2.64286C1.1835 5.75 0 4.66074 0 3.3125ZM0 15.5C0 14.1518 1.1835 13.0625 2.64286 13.0625H34.3571C35.819 13.0625 37 14.1518 37 15.5C37 16.8482 35.819 17.9375 34.3571 17.9375H2.64286C1.1835 17.9375 0 16.8482 0 15.5ZM34.3571 30.125H2.64286C1.1835 30.125 0 29.0357 0 27.6875C0 26.3393 1.1835 25.25 2.64286 25.25H34.3571C35.819 25.25 37 26.3393 37 27.6875C37 29.0357 35.819 30.125 34.3571 30.125Z" fill="#03A9F4" />
        </svg>
    );
}