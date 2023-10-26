import React from "react";

function Follow({ follow }) {
    return (
        <>
            {follow ?   <svg width="68" height="32" viewBox="0 0 68 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="19" y="3" width="29" height="26" rx="12" fill="url(#paint0_linear_11_581)" />
                <rect x="17.5" y="1.5" width="32" height="29" rx="13.5" stroke="url(#paint1_linear_11_581)" strokeOpacity="0.5" strokeWidth="3" />
                <path d="M30.55 19.15L39.025 10.675C39.225 10.475 39.4625 10.375 39.7375 10.375C40.0125 10.375 40.25 10.475 40.45 10.675C40.65 10.875 40.75 11.1125 40.75 11.3875C40.75 11.6625 40.65 11.9 40.45 12.1L31.25 21.3C31.05 21.5 30.8166 21.6 30.55 21.6C30.2833 21.6 30.05 21.5 29.85 21.3L25.55 17C25.35 16.8 25.2541 16.5625 25.2625 16.2875C25.2708 16.0125 25.375 15.775 25.575 15.575C25.775 15.375 26.0125 15.275 26.2875 15.275C26.5625 15.275 26.8 15.375 27 15.575L30.55 19.15Z" fill="white" />
                <defs>
                    <linearGradient id="paint0_linear_11_581" x1="33.5" y1="3" x2="33.5" y2="29" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F72046" />
                        <stop offset="1" stopColor="#FF007A" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_11_581" x1="33.5" y1="3" x2="33.5" y2="29" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F7206D" />
                        <stop offset="1" stopColor="#F7206D" stopOpacity="0.46" />
                    </linearGradient>
                </defs>
                        </svg>
                    :   <svg width="68" height="26" viewBox="0 0 68 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="68" height="26" rx="12" fill="url(#paint0_linear_11_75)" />
                    <path d="M22.3902 11.1016C22.3485 10.7318 22.1766 10.4453 21.8745 10.2422C21.5724 10.0365 21.1922 9.93359 20.7339 9.93359C20.4058 9.93359 20.1219 9.98568 19.8823 10.0898C19.6428 10.1914 19.4566 10.332 19.3237 10.5117C19.1935 10.6888 19.1284 10.8906 19.1284 11.1172C19.1284 11.3073 19.1727 11.4714 19.2612 11.6094C19.3524 11.7474 19.4709 11.8633 19.6167 11.957C19.7652 12.0482 19.924 12.125 20.0933 12.1875C20.2625 12.2474 20.4253 12.2969 20.5816 12.3359L21.3628 12.5391C21.618 12.6016 21.8797 12.6862 22.148 12.793C22.4162 12.8997 22.6649 13.0404 22.8941 13.2148C23.1232 13.3893 23.3081 13.6055 23.4487 13.8633C23.592 14.1211 23.6636 14.4297 23.6636 14.7891C23.6636 15.2422 23.5464 15.6445 23.312 15.9961C23.0803 16.3477 22.743 16.625 22.3003 16.8281C21.8602 17.0313 21.3277 17.1328 20.7027 17.1328C20.1037 17.1328 19.5855 17.0378 19.148 16.8477C18.7105 16.6576 18.368 16.388 18.1206 16.0391C17.8732 15.6875 17.7365 15.2708 17.7105 14.7891H18.9214C18.9448 15.0781 19.0386 15.319 19.2027 15.5117C19.3693 15.7018 19.5816 15.8437 19.8394 15.9375C20.0998 16.0286 20.3849 16.0742 20.6948 16.0742C21.036 16.0742 21.3394 16.0208 21.605 15.9141C21.8732 15.8047 22.0842 15.6536 22.2378 15.4609C22.3915 15.2656 22.4683 15.0378 22.4683 14.7773C22.4683 14.5404 22.4006 14.3464 22.2652 14.1953C22.1323 14.0443 21.9514 13.9193 21.7222 13.8203C21.4956 13.7214 21.2391 13.6341 20.9527 13.5586L20.0073 13.3008C19.3667 13.1263 18.8589 12.8698 18.4839 12.5312C18.1115 12.1927 17.9253 11.7448 17.9253 11.1875C17.9253 10.7266 18.0503 10.3242 18.3003 9.98047C18.5503 9.63672 18.8888 9.36979 19.3159 9.17969C19.743 8.98698 20.2248 8.89062 20.7612 8.89062C21.3029 8.89062 21.7808 8.98568 22.1948 9.17578C22.6115 9.36589 22.9396 9.6276 23.1792 9.96094C23.4188 10.2917 23.5438 10.6719 23.5542 11.1016H22.3902ZM27.5982 17.1211C27.007 17.1211 26.4979 16.9948 26.0708 16.7422C25.6463 16.487 25.3182 16.1289 25.0864 15.668C24.8573 15.2044 24.7427 14.6615 24.7427 14.0391C24.7427 13.4245 24.8573 12.8828 25.0864 12.4141C25.3182 11.9453 25.6411 11.5794 26.0552 11.3164C26.4719 11.0534 26.9588 10.9219 27.5161 10.9219C27.8547 10.9219 28.1828 10.9779 28.5005 11.0898C28.8182 11.2018 29.1034 11.3776 29.356 11.6172C29.6086 11.8568 29.8078 12.168 29.9536 12.5508C30.0995 12.931 30.1724 13.3932 30.1724 13.9375V14.3516H25.4028V13.4766H29.0278C29.0278 13.1693 28.9653 12.8971 28.8403 12.6602C28.7153 12.4206 28.5396 12.2318 28.313 12.0937C28.089 11.9557 27.826 11.8867 27.5239 11.8867C27.1958 11.8867 26.9094 11.9674 26.6646 12.1289C26.4224 12.2878 26.2349 12.4961 26.1021 12.7539C25.9719 13.0091 25.9068 13.2865 25.9068 13.5859V14.2695C25.9068 14.6706 25.9771 15.0117 26.1177 15.293C26.2609 15.5742 26.4601 15.7891 26.7153 15.9375C26.9706 16.0833 27.2687 16.1562 27.6099 16.1562C27.8312 16.1562 28.0331 16.125 28.2153 16.0625C28.3976 15.9974 28.5552 15.901 28.688 15.7734C28.8208 15.6458 28.9224 15.4883 28.9927 15.3008L30.0982 15.5C30.0096 15.8255 29.8508 16.1107 29.6216 16.3555C29.395 16.5977 29.1099 16.7865 28.7661 16.9219C28.425 17.0547 28.0357 17.1211 27.5982 17.1211ZM33.9839 19.375C33.5073 19.375 33.0972 19.3125 32.7534 19.1875C32.4123 19.0625 32.1336 18.8971 31.9175 18.6914C31.7013 18.4857 31.5399 18.2604 31.4331 18.0156L32.437 17.6016C32.5073 17.7161 32.6011 17.8372 32.7183 17.9648C32.8381 18.0951 32.9995 18.2057 33.2027 18.2969C33.4084 18.388 33.6727 18.4336 33.9956 18.4336C34.4383 18.4336 34.8042 18.3255 35.0933 18.1094C35.3823 17.8958 35.5269 17.5547 35.5269 17.0859V15.9062H35.4527C35.3823 16.0339 35.2808 16.1758 35.148 16.332C35.0178 16.4883 34.8381 16.6237 34.6089 16.7383C34.3797 16.8529 34.0816 16.9102 33.7144 16.9102C33.2404 16.9102 32.8133 16.7995 32.4331 16.5781C32.0555 16.3542 31.756 16.0247 31.5347 15.5898C31.3159 15.1523 31.2066 14.6146 31.2066 13.9766C31.2066 13.3385 31.3146 12.7917 31.5308 12.3359C31.7495 11.8802 32.049 11.5312 32.4292 11.2891C32.8094 11.0443 33.2404 10.9219 33.7222 10.9219C34.0946 10.9219 34.3954 10.9844 34.6245 11.1094C34.8537 11.2318 35.0321 11.375 35.1597 11.5391C35.2899 11.7031 35.3902 11.8477 35.4605 11.9727H35.5464V11H36.6909V17.1328C36.6909 17.6484 36.5711 18.0716 36.3316 18.4023C36.092 18.7331 35.7678 18.9779 35.3589 19.1367C34.9527 19.2956 34.4943 19.375 33.9839 19.375ZM33.9722 15.9414C34.3081 15.9414 34.592 15.8633 34.8237 15.707C35.0581 15.5482 35.2352 15.3216 35.355 15.0273C35.4774 14.7305 35.5386 14.375 35.5386 13.9609C35.5386 13.5573 35.4787 13.2018 35.3589 12.8945C35.2391 12.5872 35.0633 12.3477 34.8316 12.1758C34.5998 12.0013 34.3133 11.9141 33.9722 11.9141C33.6206 11.9141 33.3277 12.0052 33.0933 12.1875C32.8589 12.3672 32.6818 12.612 32.562 12.9219C32.4448 13.2318 32.3862 13.5781 32.3862 13.9609C32.3862 14.3542 32.4461 14.6992 32.5659 14.9961C32.6857 15.293 32.8628 15.5247 33.0972 15.6914C33.3342 15.8581 33.6258 15.9414 33.9722 15.9414ZM42.0581 14.5117V11H43.23V17H42.0816V15.9609H42.0191C41.881 16.2813 41.6597 16.5482 41.355 16.7617C41.0529 16.9727 40.6766 17.0781 40.2261 17.0781C39.8407 17.0781 39.4995 16.9935 39.2027 16.8242C38.9084 16.6523 38.6766 16.3984 38.5073 16.0625C38.3407 15.7266 38.2573 15.3112 38.2573 14.8164V11H39.4253V14.6758C39.4253 15.0846 39.5386 15.4102 39.7652 15.6523C39.9917 15.8945 40.286 16.0156 40.648 16.0156C40.8667 16.0156 41.0842 15.9609 41.3003 15.8516C41.5191 15.7422 41.7 15.5768 41.8433 15.3555C41.9891 15.1341 42.0607 14.8529 42.0581 14.5117ZM44.7993 17V11H45.9673V17H44.7993ZM45.3892 10.0742C45.1861 10.0742 45.0116 10.0065 44.8657 9.87109C44.7225 9.73307 44.6509 9.56901 44.6509 9.37891C44.6509 9.1862 44.7225 9.02214 44.8657 8.88672C45.0116 8.7487 45.1861 8.67969 45.3892 8.67969C45.5923 8.67969 45.7655 8.7487 45.9087 8.88672C46.0545 9.02214 46.1275 9.1862 46.1275 9.37891C46.1275 9.56901 46.0545 9.73307 45.9087 9.87109C45.7655 10.0065 45.5923 10.0742 45.3892 10.0742ZM47.5386 17V11H48.6675V11.9531H48.73C48.8394 11.6302 49.0321 11.3763 49.3081 11.1914C49.5868 11.0039 49.9019 10.9102 50.2534 10.9102C50.3263 10.9102 50.4123 10.9128 50.5112 10.918C50.6128 10.9232 50.6922 10.9297 50.7495 10.9375V12.0547C50.7027 12.0417 50.6193 12.0273 50.4995 12.0117C50.3797 11.9935 50.2599 11.9844 50.1402 11.9844C49.8641 11.9844 49.618 12.043 49.4019 12.1602C49.1883 12.2747 49.0191 12.4349 48.8941 12.6406C48.7691 12.8437 48.7066 13.0755 48.7066 13.3359V17H47.5386Z" fill="white" />
                    <defs>
                        <linearGradient id="paint0_linear_11_75" x1="34" y1="0" x2="34" y2="26" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F72046" />
                            <stop offset="1" stopColor="#FF007A" />
                        </linearGradient>
                    </defs>
                        </svg>
            }
        </>
    )
}

export default Follow;