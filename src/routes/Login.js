import image from '../assets/Library-rafiki.png';
import logo from '../assets/LibraConnect.svg';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const navigateTo = useNavigate();
    return(
        
<div class="flex flex-col sm:flex-row bg-[#EBF0FF]">
    <div class="flex-1 bg-white sm:h-screen flex items-center justify-center rounded-r-[6%]">
        <div class="mx-[20%] my-[25%]">
            <img src={logo} alt="logo" class="w-[55%] sm:w-2/3 lg:w-[50%] "/>
            <div  class="my-7  text-teal-900 text-[27px] font-semibold"></div>

            <form class="flex flex-col gap-4 justify-center items-center">

                <div class="relative inline-flex items-center">
                    <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="ic:outline-alternate-email">
                                <path id="Vector"
                                    d="M11.999 1.95009C6.47902 1.95009 1.99902 6.43009 1.99902 11.9501C1.99902 17.4701 6.47902 21.9501 11.999 21.9501H16.999V19.9501H11.999C7.65902 19.9501 3.99902 16.2901 3.99902 11.9501C3.99902 7.61009 7.65902 3.95009 11.999 3.95009C16.339 3.95009 19.999 7.61009 19.999 11.9501V13.3801C19.999 14.1701 19.289 14.9501 18.499 14.9501C17.709 14.9501 16.999 14.1701 16.999 13.3801V11.9501C16.999 9.19009 14.759 6.95009 11.999 6.95009C9.23902 6.95009 6.99902 9.19009 6.99902 11.9501C6.99902 14.7101 9.23902 16.9501 11.999 16.9501C13.379 16.9501 14.639 16.3901 15.539 15.4801C16.189 16.3701 17.309 16.9501 18.499 16.9501C20.469 16.9501 21.999 15.3501 21.999 13.3801V11.9501C21.999 6.43009 17.519 1.95009 11.999 1.95009ZM11.999 14.9501C10.339 14.9501 8.99902 13.6101 8.99902 11.9501C8.99902 10.2901 10.339 8.95009 11.999 8.95009C13.659 8.95009 14.999 10.2901 14.999 11.9501C14.999 13.6101 13.659 14.9501 11.999 14.9501Z"
                                    fill="#0B4654" fill-opacity="0.5" />
                            </g>
                        </svg>

                    </span>
                    <input  placeholder="Username or Email"  type="username"   
                        class="w-full sm:w-[350px] h-10 pl-10 pr-3.5 py-2 rounded-lg border-2 border-teal-900 border-opacity-25 focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>

                <div class="relative inline-flex items-center">
                    <span class="absolute inset-y-0 left-0 pl-3 flex items-center">

                        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="ri:lock-password-fill">
                                <path id="Vector"
                                    d="M18 8.00005H20C20.2652 8.00005 20.5196 8.1054 20.7071 8.29294C20.8946 8.48048 21 8.73483 21 9.00005V21C21 21.2653 20.8946 21.5196 20.7071 21.7072C20.5196 21.8947 20.2652 22 20 22H4C3.73478 22 3.48043 21.8947 3.29289 21.7072C3.10536 21.5196 3 21.2653 3 21V9.00005C3 8.73483 3.10536 8.48048 3.29289 8.29294C3.48043 8.1054 3.73478 8.00005 4 8.00005H6V7.00005C6 5.40875 6.63214 3.88262 7.75736 2.75741C8.88258 1.63219 10.4087 1.00005 12 1.00005C13.5913 1.00005 15.1174 1.63219 16.2426 2.75741C17.3679 3.88262 18 5.40875 18 7.00005V8.00005ZM16 8.00005V7.00005C16 5.93918 15.5786 4.92176 14.8284 4.17162C14.0783 3.42147 13.0609 3.00005 12 3.00005C10.9391 3.00005 9.92172 3.42147 9.17157 4.17162C8.42143 4.92176 8 5.93918 8 7.00005V8.00005H16ZM11 14V16H13V14H11ZM7 14V16H9V14H7ZM15 14V16H17V14H15Z"
                                    fill="#0B4654" fill-opacity="0.5" />
                            </g>
                        </svg>

                    </span>
                    <input placeholder="Password"  type="password" 
                        class="w-full sm:w-[350px] h-10 pl-10 pr-3.5 py-2 rounded-lg border-2 border-teal-900 border-opacity-25 focus:ring-2 focus:ring-blue-600 focus:outline-none"/>
                </div>
                <button
                    class="mt-3 text-white font-medium text-base w-full sm:w-[380px] h-10 py-2 rounded-lg bg-[#1578DA]"
                    type="submit">Sign in</button>

                    <div  class="mt-3 text-center text-black text-opacity-50 font-medium">Don't have an account?
                        
                        <a  class="text-[#1578DA] font-medium cursor-pointer">  Create an account</a>
                    </div>
            </form>
        </div>
    </div>
    <div class="flex-1 bg-[#EBF0FF] sm:h-screen flex items-center justify-center">
        <div class="w-[50%] sm:w-2/3 lg:w-[55%]">
            <img src={image}/>
        </div>
        

    </div>
</div>
    )
}