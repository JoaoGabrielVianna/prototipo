import React from "react";

function RegisterButton({ativado}) {
    return (
        <>
        {ativado ? <svg width="308" height="49" viewBox="0 0 308 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2" width="304" height="45" rx="16" fill="url(#paint0_linear_225_980)" stroke="url(#paint1_linear_225_980)" strokeWidth="4"/>
<path d="M121.13 29V17.3636H125.278C126.179 17.3636 126.927 17.5189 127.522 17.8295C128.121 18.1402 128.567 18.5701 128.863 19.1193C129.158 19.6648 129.306 20.2955 129.306 21.0114C129.306 21.7235 129.156 22.3504 128.857 22.892C128.562 23.4299 128.115 23.8485 127.516 24.1477C126.922 24.447 126.174 24.5966 125.272 24.5966H122.13V23.0852H125.113C125.681 23.0852 126.143 23.0038 126.499 22.8409C126.859 22.678 127.122 22.4413 127.289 22.1307C127.456 21.8201 127.539 21.447 127.539 21.0114C127.539 20.572 127.454 20.1913 127.283 19.8693C127.117 19.5473 126.853 19.3011 126.494 19.1307C126.138 18.9564 125.67 18.8693 125.09 18.8693H122.886V29H121.13ZM126.874 23.75L129.749 29H127.749L124.931 23.75H126.874ZM134.958 29.1761C134.098 29.1761 133.358 28.9924 132.737 28.625C132.119 28.2538 131.642 27.733 131.305 27.0625C130.971 26.3883 130.805 25.5985 130.805 24.6932C130.805 23.7992 130.971 23.0114 131.305 22.3295C131.642 21.6477 132.112 21.1155 132.714 20.733C133.32 20.3504 134.028 20.1591 134.839 20.1591C135.331 20.1591 135.808 20.2405 136.271 20.4034C136.733 20.5663 137.147 20.822 137.515 21.1705C137.882 21.5189 138.172 21.9716 138.384 22.5284C138.596 23.0814 138.702 23.7538 138.702 24.5455V25.1477H131.765V23.875H137.038C137.038 23.428 136.947 23.0322 136.765 22.6875C136.583 22.339 136.327 22.0644 135.998 21.8636C135.672 21.6629 135.29 21.5625 134.85 21.5625C134.373 21.5625 133.956 21.6799 133.6 21.9148C133.248 22.1458 132.975 22.4489 132.782 22.8239C132.593 23.1951 132.498 23.5985 132.498 24.0341V25.0284C132.498 25.6117 132.6 26.108 132.805 26.517C133.013 26.9261 133.303 27.2386 133.674 27.4545C134.045 27.6667 134.479 27.7727 134.975 27.7727C135.297 27.7727 135.591 27.7273 135.856 27.6364C136.121 27.5417 136.35 27.4015 136.543 27.2159C136.737 27.0303 136.884 26.8011 136.987 26.5284L138.594 26.8182C138.466 27.2917 138.235 27.7064 137.901 28.0625C137.572 28.4148 137.157 28.6894 136.657 28.8864C136.161 29.0795 135.594 29.1761 134.958 29.1761ZM144.246 32.4545C143.553 32.4545 142.957 32.3636 142.457 32.1818C141.96 32 141.555 31.7595 141.241 31.4602C140.926 31.161 140.692 30.8333 140.536 30.4773L141.996 29.875C142.099 30.0417 142.235 30.2178 142.406 30.4034C142.58 30.5928 142.815 30.7538 143.11 30.8864C143.409 31.0189 143.794 31.0852 144.263 31.0852C144.907 31.0852 145.44 30.928 145.86 30.6136C146.281 30.303 146.491 29.8068 146.491 29.125V27.4091H146.383C146.281 27.5947 146.133 27.8011 145.94 28.0284C145.75 28.2557 145.489 28.4527 145.156 28.6193C144.822 28.786 144.388 28.8693 143.854 28.8693C143.165 28.8693 142.544 28.7083 141.991 28.3864C141.442 28.0606 141.006 27.5814 140.684 26.9489C140.366 26.3125 140.207 25.5303 140.207 24.6023C140.207 23.6742 140.364 22.8788 140.678 22.2159C140.996 21.553 141.432 21.0455 141.985 20.6932C142.538 20.3371 143.165 20.1591 143.866 20.1591C144.407 20.1591 144.845 20.25 145.178 20.4318C145.512 20.6098 145.771 20.8182 145.957 21.0568C146.146 21.2955 146.292 21.5057 146.394 21.6875H146.519V20.2727H148.184V29.1932C148.184 29.9432 148.01 30.5587 147.661 31.0398C147.313 31.5208 146.841 31.8769 146.246 32.108C145.656 32.339 144.989 32.4545 144.246 32.4545ZM144.229 27.4602C144.718 27.4602 145.131 27.3466 145.468 27.1193C145.809 26.8883 146.067 26.5587 146.241 26.1307C146.419 25.6989 146.508 25.1818 146.508 24.5795C146.508 23.9924 146.421 23.4754 146.246 23.0284C146.072 22.5814 145.817 22.233 145.479 21.983C145.142 21.7292 144.726 21.6023 144.229 21.6023C143.718 21.6023 143.292 21.7348 142.951 22C142.61 22.2614 142.353 22.6174 142.178 23.0682C142.008 23.5189 141.923 24.0227 141.923 24.5795C141.923 25.1515 142.01 25.6534 142.184 26.0852C142.358 26.517 142.616 26.8542 142.957 27.0966C143.301 27.339 143.726 27.4602 144.229 27.4602ZM150.462 29V20.2727H152.161V29H150.462ZM151.32 18.9261C151.025 18.9261 150.771 18.8277 150.559 18.6307C150.351 18.4299 150.246 18.1913 150.246 17.9148C150.246 17.6345 150.351 17.3958 150.559 17.1989C150.771 16.9981 151.025 16.8977 151.32 16.8977C151.616 16.8977 151.868 16.9981 152.076 17.1989C152.288 17.3958 152.394 17.6345 152.394 17.9148C152.394 18.1913 152.288 18.4299 152.076 18.6307C151.868 18.8277 151.616 18.9261 151.32 18.9261ZM160.987 22.4034L159.447 22.6761C159.382 22.4792 159.28 22.2917 159.14 22.1136C159.004 21.9356 158.818 21.7898 158.583 21.6761C158.348 21.5625 158.055 21.5057 157.702 21.5057C157.221 21.5057 156.82 21.6136 156.498 21.8295C156.176 22.0417 156.015 22.3163 156.015 22.6534C156.015 22.9451 156.123 23.1799 156.339 23.358C156.555 23.536 156.903 23.6818 157.384 23.7955L158.771 24.1136C159.574 24.2992 160.172 24.5852 160.566 24.9716C160.96 25.358 161.157 25.8598 161.157 26.4773C161.157 27 161.005 27.4659 160.702 27.875C160.403 28.2803 159.985 28.5985 159.447 28.8295C158.913 29.0606 158.293 29.1761 157.589 29.1761C156.612 29.1761 155.814 28.9678 155.197 28.5511C154.579 28.1307 154.201 27.5341 154.06 26.7614L155.702 26.5114C155.805 26.9394 156.015 27.2633 156.333 27.483C156.651 27.6989 157.066 27.8068 157.577 27.8068C158.134 27.8068 158.579 27.6913 158.913 27.4602C159.246 27.2254 159.413 26.9394 159.413 26.6023C159.413 26.3295 159.31 26.1004 159.106 25.9148C158.905 25.7292 158.596 25.589 158.18 25.4943L156.702 25.1705C155.888 24.9848 155.286 24.6894 154.896 24.2841C154.509 23.8788 154.316 23.3655 154.316 22.7443C154.316 22.2292 154.46 21.7784 154.748 21.392C155.036 21.0057 155.433 20.7045 155.941 20.4886C156.449 20.2689 157.03 20.1591 157.685 20.1591C158.629 20.1591 159.371 20.3636 159.913 20.7727C160.454 21.178 160.812 21.7216 160.987 22.4034ZM167.099 20.2727V21.6364H162.332V20.2727H167.099ZM163.61 18.1818H165.309V26.4375C165.309 26.767 165.358 27.0152 165.457 27.1818C165.555 27.3447 165.682 27.4564 165.837 27.517C165.996 27.5739 166.169 27.6023 166.354 27.6023C166.491 27.6023 166.61 27.5928 166.712 27.5739C166.815 27.5549 166.894 27.5398 166.951 27.5284L167.258 28.9318C167.159 28.9697 167.019 29.0076 166.837 29.0455C166.656 29.0871 166.428 29.1098 166.156 29.1136C165.709 29.1212 165.292 29.0417 164.906 28.875C164.519 28.7083 164.207 28.4508 163.968 28.1023C163.729 27.7538 163.61 27.3163 163.61 26.7898V18.1818ZM168.978 29V20.2727H170.62V21.6591H170.711C170.87 21.1894 171.15 20.8201 171.552 20.5511C171.957 20.2784 172.415 20.142 172.927 20.142C173.033 20.142 173.158 20.1458 173.302 20.1534C173.45 20.161 173.565 20.1705 173.648 20.1818V21.8068C173.58 21.7879 173.459 21.767 173.285 21.7443C173.111 21.7178 172.936 21.7045 172.762 21.7045C172.361 21.7045 172.003 21.7898 171.688 21.9602C171.378 22.1269 171.131 22.3598 170.95 22.6591C170.768 22.9545 170.677 23.2917 170.677 23.6705V29H168.978ZM177.58 29.1932C177.027 29.1932 176.527 29.0909 176.08 28.8864C175.633 28.678 175.279 28.3769 175.018 27.983C174.76 27.589 174.631 27.1061 174.631 26.5341C174.631 26.0417 174.726 25.6364 174.915 25.3182C175.105 25 175.361 24.7481 175.683 24.5625C176.004 24.3769 176.364 24.2367 176.762 24.142C177.16 24.0473 177.565 23.9754 177.978 23.9261C178.501 23.8655 178.925 23.8163 179.251 23.7784C179.576 23.7367 179.813 23.6705 179.961 23.5795C180.109 23.4886 180.183 23.3409 180.183 23.1364V23.0966C180.183 22.6004 180.042 22.2159 179.762 21.9432C179.486 21.6705 179.073 21.5341 178.523 21.5341C177.951 21.5341 177.501 21.661 177.171 21.9148C176.845 22.1648 176.62 22.4432 176.495 22.75L174.898 22.3864C175.088 21.8561 175.364 21.428 175.728 21.1023C176.095 20.7727 176.518 20.5341 176.995 20.3864C177.472 20.2348 177.974 20.1591 178.501 20.1591C178.849 20.1591 179.219 20.2008 179.609 20.2841C180.003 20.3636 180.37 20.5114 180.711 20.7273C181.056 20.9432 181.338 21.2519 181.558 21.6534C181.777 22.0511 181.887 22.5682 181.887 23.2045V29H180.228V27.8068H180.16C180.05 28.0265 179.885 28.2424 179.665 28.4545C179.446 28.6667 179.164 28.8428 178.819 28.983C178.474 29.1231 178.061 29.1932 177.58 29.1932ZM177.95 27.8295C178.419 27.8295 178.821 27.7367 179.154 27.5511C179.491 27.3655 179.747 27.1231 179.921 26.8239C180.099 26.5208 180.188 26.197 180.188 25.8523V24.7273C180.128 24.7879 180.01 24.8447 179.836 24.8977C179.665 24.947 179.47 24.9905 179.251 25.0284C179.031 25.0625 178.817 25.0947 178.609 25.125C178.4 25.1515 178.226 25.1742 178.086 25.1932C177.756 25.2348 177.455 25.3049 177.183 25.4034C176.914 25.5019 176.698 25.6439 176.535 25.8295C176.376 26.0114 176.296 26.2538 176.296 26.5568C176.296 26.9773 176.451 27.2955 176.762 27.5114C177.073 27.7235 177.469 27.8295 177.95 27.8295ZM184.15 29V20.2727H185.792V21.6591H185.883C186.042 21.1894 186.322 20.8201 186.724 20.5511C187.129 20.2784 187.587 20.142 188.099 20.142C188.205 20.142 188.33 20.1458 188.474 20.1534C188.621 20.161 188.737 20.1705 188.82 20.1818V21.8068C188.752 21.7879 188.631 21.767 188.457 21.7443C188.282 21.7178 188.108 21.7045 187.934 21.7045C187.532 21.7045 187.174 21.7898 186.86 21.9602C186.549 22.1269 186.303 22.3598 186.121 22.6591C185.94 22.9545 185.849 23.2917 185.849 23.6705V29H184.15Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_225_980" x1="154" y1="4" x2="154" y2="45" gradientUnits="userSpaceOnUse">
<stop stopColor="#F72046"/>
<stop offset="1" stopColor="#FF007A"/>
</linearGradient>
<linearGradient id="paint1_linear_225_980" x1="154" y1="4" x2="154" y2="45" gradientUnits="userSpaceOnUse">
<stop stopColor="#F7206D" stopOpacity="0.51"/>
<stop offset="1" stopColor="#F3189C" stopOpacity="0.2"/>
</linearGradient>
</defs>
</svg>
 : <svg width="300" height="41" viewBox="0 0 300 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="41" rx="14" fill="url(#paint0_linear_222_1017)" />
                <path d="M117.13 25V13.3636H121.278C122.179 13.3636 122.927 13.5189 123.522 13.8295C124.121 14.1402 124.567 14.5701 124.863 15.1193C125.158 15.6648 125.306 16.2955 125.306 17.0114C125.306 17.7235 125.156 18.3504 124.857 18.892C124.562 19.4299 124.115 19.8485 123.516 20.1477C122.922 20.447 122.174 20.5966 121.272 20.5966H118.13V19.0852H121.113C121.681 19.0852 122.143 19.0038 122.499 18.8409C122.859 18.678 123.122 18.4413 123.289 18.1307C123.456 17.8201 123.539 17.447 123.539 17.0114C123.539 16.572 123.454 16.1913 123.283 15.8693C123.117 15.5473 122.853 15.3011 122.494 15.1307C122.138 14.9564 121.67 14.8693 121.09 14.8693H118.886V25H117.13ZM122.874 19.75L125.749 25H123.749L120.931 19.75H122.874ZM130.958 25.1761C130.098 25.1761 129.358 24.9924 128.737 24.625C128.119 24.2538 127.642 23.733 127.305 23.0625C126.971 22.3883 126.805 21.5985 126.805 20.6932C126.805 19.7992 126.971 19.0114 127.305 18.3295C127.642 17.6477 128.112 17.1155 128.714 16.733C129.32 16.3504 130.028 16.1591 130.839 16.1591C131.331 16.1591 131.808 16.2405 132.271 16.4034C132.733 16.5663 133.147 16.822 133.515 17.1705C133.882 17.5189 134.172 17.9716 134.384 18.5284C134.596 19.0814 134.702 19.7538 134.702 20.5455V21.1477H127.765V19.875H133.038C133.038 19.428 132.947 19.0322 132.765 18.6875C132.583 18.339 132.327 18.0644 131.998 17.8636C131.672 17.6629 131.29 17.5625 130.85 17.5625C130.373 17.5625 129.956 17.6799 129.6 17.9148C129.248 18.1458 128.975 18.4489 128.782 18.8239C128.593 19.1951 128.498 19.5985 128.498 20.0341V21.0284C128.498 21.6117 128.6 22.108 128.805 22.517C129.013 22.9261 129.303 23.2386 129.674 23.4545C130.045 23.6667 130.479 23.7727 130.975 23.7727C131.297 23.7727 131.591 23.7273 131.856 23.6364C132.121 23.5417 132.35 23.4015 132.543 23.2159C132.737 23.0303 132.884 22.8011 132.987 22.5284L134.594 22.8182C134.466 23.2917 134.235 23.7064 133.901 24.0625C133.572 24.4148 133.157 24.6894 132.657 24.8864C132.161 25.0795 131.594 25.1761 130.958 25.1761ZM140.246 28.4545C139.553 28.4545 138.957 28.3636 138.457 28.1818C137.96 28 137.555 27.7595 137.241 27.4602C136.926 27.161 136.692 26.8333 136.536 26.4773L137.996 25.875C138.099 26.0417 138.235 26.2178 138.406 26.4034C138.58 26.5928 138.815 26.7538 139.11 26.8864C139.409 27.0189 139.794 27.0852 140.263 27.0852C140.907 27.0852 141.44 26.928 141.86 26.6136C142.281 26.303 142.491 25.8068 142.491 25.125V23.4091H142.383C142.281 23.5947 142.133 23.8011 141.94 24.0284C141.75 24.2557 141.489 24.4527 141.156 24.6193C140.822 24.786 140.388 24.8693 139.854 24.8693C139.165 24.8693 138.544 24.7083 137.991 24.3864C137.442 24.0606 137.006 23.5814 136.684 22.9489C136.366 22.3125 136.207 21.5303 136.207 20.6023C136.207 19.6742 136.364 18.8788 136.678 18.2159C136.996 17.553 137.432 17.0455 137.985 16.6932C138.538 16.3371 139.165 16.1591 139.866 16.1591C140.407 16.1591 140.845 16.25 141.178 16.4318C141.512 16.6098 141.771 16.8182 141.957 17.0568C142.146 17.2955 142.292 17.5057 142.394 17.6875H142.519V16.2727H144.184V25.1932C144.184 25.9432 144.01 26.5587 143.661 27.0398C143.313 27.5208 142.841 27.8769 142.246 28.108C141.656 28.339 140.989 28.4545 140.246 28.4545ZM140.229 23.4602C140.718 23.4602 141.131 23.3466 141.468 23.1193C141.809 22.8883 142.067 22.5587 142.241 22.1307C142.419 21.6989 142.508 21.1818 142.508 20.5795C142.508 19.9924 142.421 19.4754 142.246 19.0284C142.072 18.5814 141.817 18.233 141.479 17.983C141.142 17.7292 140.726 17.6023 140.229 17.6023C139.718 17.6023 139.292 17.7348 138.951 18C138.61 18.2614 138.353 18.6174 138.178 19.0682C138.008 19.5189 137.923 20.0227 137.923 20.5795C137.923 21.1515 138.01 21.6534 138.184 22.0852C138.358 22.517 138.616 22.8542 138.957 23.0966C139.301 23.339 139.726 23.4602 140.229 23.4602ZM146.462 25V16.2727H148.161V25H146.462ZM147.32 14.9261C147.025 14.9261 146.771 14.8277 146.559 14.6307C146.351 14.4299 146.246 14.1913 146.246 13.9148C146.246 13.6345 146.351 13.3958 146.559 13.1989C146.771 12.9981 147.025 12.8977 147.32 12.8977C147.616 12.8977 147.868 12.9981 148.076 13.1989C148.288 13.3958 148.394 13.6345 148.394 13.9148C148.394 14.1913 148.288 14.4299 148.076 14.6307C147.868 14.8277 147.616 14.9261 147.32 14.9261ZM156.987 18.4034L155.447 18.6761C155.382 18.4792 155.28 18.2917 155.14 18.1136C155.004 17.9356 154.818 17.7898 154.583 17.6761C154.348 17.5625 154.055 17.5057 153.702 17.5057C153.221 17.5057 152.82 17.6136 152.498 17.8295C152.176 18.0417 152.015 18.3163 152.015 18.6534C152.015 18.9451 152.123 19.1799 152.339 19.358C152.555 19.536 152.903 19.6818 153.384 19.7955L154.771 20.1136C155.574 20.2992 156.172 20.5852 156.566 20.9716C156.96 21.358 157.157 21.8598 157.157 22.4773C157.157 23 157.005 23.4659 156.702 23.875C156.403 24.2803 155.985 24.5985 155.447 24.8295C154.913 25.0606 154.293 25.1761 153.589 25.1761C152.612 25.1761 151.814 24.9678 151.197 24.5511C150.579 24.1307 150.201 23.5341 150.06 22.7614L151.702 22.5114C151.805 22.9394 152.015 23.2633 152.333 23.483C152.651 23.6989 153.066 23.8068 153.577 23.8068C154.134 23.8068 154.579 23.6913 154.913 23.4602C155.246 23.2254 155.413 22.9394 155.413 22.6023C155.413 22.3295 155.31 22.1004 155.106 21.9148C154.905 21.7292 154.596 21.589 154.18 21.4943L152.702 21.1705C151.888 20.9848 151.286 20.6894 150.896 20.2841C150.509 19.8788 150.316 19.3655 150.316 18.7443C150.316 18.2292 150.46 17.7784 150.748 17.392C151.036 17.0057 151.433 16.7045 151.941 16.4886C152.449 16.2689 153.03 16.1591 153.685 16.1591C154.629 16.1591 155.371 16.3636 155.913 16.7727C156.454 17.178 156.812 17.7216 156.987 18.4034ZM163.099 16.2727V17.6364H158.332V16.2727H163.099ZM159.61 14.1818H161.309V22.4375C161.309 22.767 161.358 23.0152 161.457 23.1818C161.555 23.3447 161.682 23.4564 161.837 23.517C161.996 23.5739 162.169 23.6023 162.354 23.6023C162.491 23.6023 162.61 23.5928 162.712 23.5739C162.815 23.5549 162.894 23.5398 162.951 23.5284L163.258 24.9318C163.159 24.9697 163.019 25.0076 162.837 25.0455C162.656 25.0871 162.428 25.1098 162.156 25.1136C161.709 25.1212 161.292 25.0417 160.906 24.875C160.519 24.7083 160.207 24.4508 159.968 24.1023C159.729 23.7538 159.61 23.3163 159.61 22.7898V14.1818ZM164.978 25V16.2727H166.62V17.6591H166.711C166.87 17.1894 167.15 16.8201 167.552 16.5511C167.957 16.2784 168.415 16.142 168.927 16.142C169.033 16.142 169.158 16.1458 169.302 16.1534C169.45 16.161 169.565 16.1705 169.648 16.1818V17.8068C169.58 17.7879 169.459 17.767 169.285 17.7443C169.111 17.7178 168.936 17.7045 168.762 17.7045C168.361 17.7045 168.003 17.7898 167.688 17.9602C167.378 18.1269 167.131 18.3598 166.95 18.6591C166.768 18.9545 166.677 19.2917 166.677 19.6705V25H164.978ZM173.58 25.1932C173.027 25.1932 172.527 25.0909 172.08 24.8864C171.633 24.678 171.279 24.3769 171.018 23.983C170.76 23.589 170.631 23.1061 170.631 22.5341C170.631 22.0417 170.726 21.6364 170.915 21.3182C171.105 21 171.361 20.7481 171.683 20.5625C172.004 20.3769 172.364 20.2367 172.762 20.142C173.16 20.0473 173.565 19.9754 173.978 19.9261C174.501 19.8655 174.925 19.8163 175.251 19.7784C175.576 19.7367 175.813 19.6705 175.961 19.5795C176.109 19.4886 176.183 19.3409 176.183 19.1364V19.0966C176.183 18.6004 176.042 18.2159 175.762 17.9432C175.486 17.6705 175.073 17.5341 174.523 17.5341C173.951 17.5341 173.501 17.661 173.171 17.9148C172.845 18.1648 172.62 18.4432 172.495 18.75L170.898 18.3864C171.088 17.8561 171.364 17.428 171.728 17.1023C172.095 16.7727 172.518 16.5341 172.995 16.3864C173.472 16.2348 173.974 16.1591 174.501 16.1591C174.849 16.1591 175.219 16.2008 175.609 16.2841C176.003 16.3636 176.37 16.5114 176.711 16.7273C177.056 16.9432 177.338 17.2519 177.558 17.6534C177.777 18.0511 177.887 18.5682 177.887 19.2045V25H176.228V23.8068H176.16C176.05 24.0265 175.885 24.2424 175.665 24.4545C175.446 24.6667 175.164 24.8428 174.819 24.983C174.474 25.1231 174.061 25.1932 173.58 25.1932ZM173.95 23.8295C174.419 23.8295 174.821 23.7367 175.154 23.5511C175.491 23.3655 175.747 23.1231 175.921 22.8239C176.099 22.5208 176.188 22.197 176.188 21.8523V20.7273C176.128 20.7879 176.01 20.8447 175.836 20.8977C175.665 20.947 175.47 20.9905 175.251 21.0284C175.031 21.0625 174.817 21.0947 174.609 21.125C174.4 21.1515 174.226 21.1742 174.086 21.1932C173.756 21.2348 173.455 21.3049 173.183 21.4034C172.914 21.5019 172.698 21.6439 172.535 21.8295C172.376 22.0114 172.296 22.2538 172.296 22.5568C172.296 22.9773 172.451 23.2955 172.762 23.5114C173.073 23.7235 173.469 23.8295 173.95 23.8295ZM180.15 25V16.2727H181.792V17.6591H181.883C182.042 17.1894 182.322 16.8201 182.724 16.5511C183.129 16.2784 183.587 16.142 184.099 16.142C184.205 16.142 184.33 16.1458 184.474 16.1534C184.621 16.161 184.737 16.1705 184.82 16.1818V17.8068C184.752 17.7879 184.631 17.767 184.457 17.7443C184.282 17.7178 184.108 17.7045 183.934 17.7045C183.532 17.7045 183.174 17.7898 182.86 17.9602C182.549 18.1269 182.303 18.3598 182.121 18.6591C181.94 18.9545 181.849 19.2917 181.849 19.6705V25H180.15Z" fill="#363636" />
                <defs>
                    <linearGradient id="paint0_linear_222_1017" x1="150" y1="0" x2="150" y2="41" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="#EAEAEA" />
                    </linearGradient>
                </defs>
            </svg>}
            



        </>
    )
}

export default RegisterButton;