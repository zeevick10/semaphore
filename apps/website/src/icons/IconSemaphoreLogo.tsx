import { Icon } from "@chakra-ui/react"
import React from "react"

export type IconSemaphoreLogoProps = {
    width?: number
    height?: number
    color?: string
}

export default function IconSemaphoreLogo({ width, height, color }: IconSemaphoreLogoProps): JSX.Element {
    return (
        <Icon viewBox="0 0 149 40" width={width} height={height} color={color}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.9239 0H19.3595C8.66769 0 0 8.68848 0 19.406V19.9999H9.96197L19.9239 10.0954V0ZM18.2705 1.6939V9.40519L9.28173 18.3425H1.68653C1.94142 14.0024 3.74877 9.95766 6.84047 6.85854C9.92721 3.7644 13.9507 1.95437 18.2705 1.6939Z"
                fill="currentColor"
            />
            <path
                d="M19.9256 20.0001H9.96362L0 29.9046V40H0.56604C11.2579 40 19.9256 31.3115 19.9256 20.594V20.0001Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M139.575 26.0528C140.552 26.6013 141.649 26.8756 142.866 26.8756C143.826 26.8756 144.727 26.6956 145.566 26.3356C146.424 25.9756 147.144 25.4528 147.727 24.767L146.235 23.2499C145.824 23.7299 145.326 24.0899 144.744 24.3299C144.178 24.5699 143.552 24.6899 142.866 24.6899C142.044 24.6899 141.315 24.5185 140.681 24.1756C140.046 23.8156 139.558 23.3185 139.215 22.6842C139.005 22.2855 138.86 21.8484 138.778 21.3727H148.344C148.395 21.1156 148.429 20.8927 148.447 20.7042C148.464 20.4984 148.472 20.3099 148.472 20.1384C148.472 18.9899 148.224 17.9613 147.727 17.0527C147.247 16.1441 146.569 15.4327 145.695 14.9184C144.838 14.4041 143.844 14.147 142.712 14.147C141.529 14.147 140.458 14.4298 139.498 14.9956C138.555 15.5441 137.801 16.2984 137.235 17.2584C136.686 18.2184 136.412 19.2984 136.412 20.4984C136.412 21.7156 136.695 22.8042 137.261 23.7642C137.826 24.7242 138.598 25.487 139.575 26.0528ZM138.783 19.4442C138.862 19.0025 138.997 18.5997 139.189 18.2356C139.515 17.6184 139.978 17.1384 140.578 16.7956C141.178 16.4527 141.872 16.2813 142.661 16.2813C143.415 16.2813 144.058 16.4441 144.589 16.7699C145.121 17.0784 145.532 17.5241 145.824 18.107C146.022 18.4929 146.153 18.9386 146.217 19.4442H138.783Z"
                fill="currentColor"
            />
            <path
                d="M128.062 26.6185V14.4041H130.376V15.8236C130.441 15.7244 130.509 15.6284 130.582 15.5356C131.302 14.6098 132.339 14.147 133.693 14.147C134.31 14.147 134.867 14.2584 135.365 14.4813C135.862 14.687 136.325 15.0384 136.753 15.5356L135.236 17.1041C134.979 16.8299 134.696 16.6327 134.387 16.5127C134.079 16.3927 133.719 16.3327 133.307 16.3327C132.45 16.3327 131.747 16.607 131.199 17.1556C130.65 17.7041 130.376 18.5356 130.376 19.6499V26.6185H128.062Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M116.608 26.0271C117.568 26.5928 118.648 26.8756 119.848 26.8756C121.031 26.8756 122.103 26.5928 123.063 26.0271C124.04 25.4613 124.811 24.6985 125.377 23.7385C125.943 22.7613 126.225 21.6727 126.225 20.4727C126.225 19.2899 125.943 18.2184 125.377 17.2584C124.811 16.2984 124.04 15.5441 123.063 14.9956C122.103 14.4298 121.031 14.147 119.848 14.147C118.648 14.147 117.568 14.4298 116.608 14.9956C115.648 15.5613 114.885 16.3241 114.32 17.2841C113.754 18.227 113.471 19.2899 113.471 20.4727C113.471 21.6727 113.754 22.7613 114.32 23.7385C114.885 24.6985 115.648 25.4613 116.608 26.0271ZM121.905 24.0985C121.305 24.4585 120.62 24.6385 119.848 24.6385C119.077 24.6385 118.391 24.4585 117.791 24.0985C117.191 23.7385 116.72 23.2499 116.377 22.6327C116.034 21.9985 115.863 21.2785 115.863 20.4727C115.863 19.6842 116.034 18.9813 116.377 18.3641C116.72 17.747 117.191 17.267 117.791 16.9241C118.391 16.5641 119.077 16.3841 119.848 16.3841C120.62 16.3841 121.297 16.5641 121.88 16.9241C122.48 17.267 122.951 17.747 123.294 18.3641C123.654 18.9813 123.834 19.6842 123.834 20.4727C123.834 21.2785 123.663 21.9985 123.32 22.6327C122.977 23.2499 122.505 23.7385 121.905 24.0985Z"
                fill="currentColor"
            />
            <path
                d="M109.592 26.6185V19.4956C109.592 18.5699 109.301 17.807 108.718 17.207C108.135 16.607 107.381 16.307 106.455 16.307C105.838 16.307 105.289 16.4441 104.809 16.7184C104.329 16.9927 103.952 17.3699 103.678 17.8499C103.403 18.3299 103.266 18.8784 103.266 19.4956V26.6185H100.952V8.25838H103.266V15.9822C103.637 15.4972 104.1 15.0998 104.655 14.7898C105.392 14.3613 106.223 14.147 107.149 14.147C108.075 14.147 108.889 14.3527 109.592 14.7641C110.312 15.1756 110.878 15.7498 111.289 16.487C111.701 17.2241 111.906 18.0727 111.906 19.0327V26.6185H109.592Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M90.6654 26.3099C91.4197 26.6871 92.2597 26.8756 93.1854 26.8756C94.2997 26.8756 95.3026 26.6013 96.194 26.0528C97.1026 25.487 97.814 24.7242 98.3283 23.7642C98.8426 22.8042 99.0997 21.7242 99.0997 20.5242C99.0997 19.3242 98.8426 18.2441 98.3283 17.2841C97.814 16.3241 97.1026 15.5613 96.194 14.9956C95.3026 14.4298 94.2997 14.147 93.1854 14.147C92.2768 14.147 91.4454 14.3441 90.6911 14.7384C90.0461 15.0684 89.5061 15.5165 89.0711 16.0828V14.4041H86.7568V31.7357H89.0711V24.9483C89.492 25.5127 90.0235 25.9665 90.6654 26.3099ZM94.8311 24.1499C94.2483 24.5099 93.5711 24.6899 92.7997 24.6899C92.0454 24.6899 91.3682 24.5099 90.7682 24.1499C90.1854 23.7899 89.7311 23.3013 89.4054 22.6842C89.0968 22.0499 88.9425 21.3299 88.9425 20.5242C88.9425 19.7013 89.1054 18.9727 89.4311 18.3384C89.7568 17.7041 90.2111 17.2156 90.794 16.8727C91.3768 16.5127 92.054 16.3327 92.8254 16.3327C93.5797 16.3327 94.2483 16.5127 94.8311 16.8727C95.414 17.2156 95.8768 17.7041 96.2197 18.3384C96.5626 18.9727 96.734 19.6927 96.734 20.4984C96.734 21.3213 96.5626 22.0499 96.2197 22.6842C95.8768 23.3013 95.414 23.7899 94.8311 24.1499Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M78.2702 26.8756C77.1559 26.8756 76.1445 26.6013 75.2359 26.0528C74.3273 25.487 73.6073 24.7242 73.0759 23.7642C72.5616 22.8042 72.3045 21.7242 72.3045 20.5242C72.3045 19.3242 72.5616 18.2441 73.0759 17.2841C73.6073 16.3241 74.3188 15.5613 75.2102 14.9956C76.1188 14.4298 77.1388 14.147 78.2702 14.147C79.1959 14.147 80.0188 14.3441 80.7388 14.7384C81.3807 15.0668 81.9122 15.5123 82.3331 16.0747V14.4041H84.6731V26.6185H82.3331V24.9569C81.9261 25.5173 81.4032 25.9683 80.7645 26.3099C80.0445 26.6871 79.2131 26.8756 78.2702 26.8756ZM78.6559 24.6899C79.8045 24.6899 80.7302 24.3042 81.4331 23.5327C82.136 22.7442 82.4874 21.7413 82.4874 20.5242C82.4874 19.6842 82.3245 18.9556 81.9988 18.3384C81.6902 17.7041 81.2445 17.2156 80.6617 16.8727C80.0788 16.5127 79.4017 16.3327 78.6302 16.3327C77.8588 16.3327 77.1731 16.5127 76.5731 16.8727C75.9902 17.2327 75.5273 17.7299 75.1845 18.3641C74.8588 18.9813 74.6959 19.6927 74.6959 20.4984C74.6959 21.3213 74.8588 22.0499 75.1845 22.6842C75.5273 23.3013 75.9988 23.7899 76.5988 24.1499C77.1988 24.5099 77.8845 24.6899 78.6559 24.6899Z"
                fill="currentColor"
            />
            <path
                d="M51.8494 14.4041V26.6185H54.1637V19.2127C54.1637 18.6127 54.3009 18.0984 54.5752 17.6699C54.8495 17.2413 55.2095 16.907 55.6552 16.667C56.1009 16.427 56.6066 16.307 57.1723 16.307C58.0123 16.307 58.7066 16.5727 59.2552 17.1041C59.8209 17.6184 60.1038 18.3299 60.1038 19.2384V26.6185H62.4181V19.2127C62.4181 18.6127 62.5552 18.0984 62.8295 17.6699C63.1038 17.2413 63.4638 16.907 63.9095 16.667C64.3724 16.427 64.8867 16.307 65.4524 16.307C66.2752 16.307 66.961 16.5727 67.5095 17.1041C68.0752 17.6184 68.3581 18.3299 68.3581 19.2384V26.6185H70.6981V18.7756C70.6981 17.8156 70.4838 16.9927 70.0553 16.307C69.6438 15.6213 69.0867 15.0898 68.3838 14.7127C67.681 14.3356 66.8838 14.147 65.9924 14.147C65.1352 14.147 64.3467 14.3441 63.6267 14.7384C62.9067 15.1156 62.3152 15.647 61.8524 16.3327C61.8459 16.3424 61.8395 16.352 61.8332 16.3617C61.8226 16.3434 61.8118 16.3252 61.8009 16.307C61.4066 15.6213 60.8581 15.0898 60.1552 14.7127C59.4695 14.3356 58.6981 14.147 57.8409 14.147C56.9666 14.147 56.178 14.3441 55.4752 14.7384C54.9596 15.015 54.5225 15.3747 54.1637 15.8173V14.4041H51.8494Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M44.4917 26.8756C43.2746 26.8756 42.1774 26.6013 41.2003 26.0528C40.2231 25.487 39.4517 24.7242 38.886 23.7642C38.3202 22.8042 38.0374 21.7156 38.0374 20.4984C38.0374 19.2984 38.3117 18.2184 38.8602 17.2584C39.426 16.2984 40.1802 15.5441 41.1231 14.9956C42.0831 14.4298 43.1546 14.147 44.3374 14.147C45.4689 14.147 46.4631 14.4041 47.3203 14.9184C48.1946 15.4327 48.8717 16.1441 49.3517 17.0527C49.8489 17.9613 50.0975 18.9899 50.0975 20.1384C50.0975 20.3099 50.0889 20.4984 50.0717 20.7042C50.0546 20.8927 50.0203 21.1156 49.9689 21.3727H40.4034C40.4848 21.8484 40.6304 22.2855 40.8403 22.6842C41.1831 23.3185 41.6717 23.8156 42.306 24.1756C42.9403 24.5185 43.6688 24.6899 44.4917 24.6899C45.1774 24.6899 45.8031 24.5699 46.3689 24.3299C46.9517 24.0899 47.4489 23.7299 47.8603 23.2499L49.3517 24.767C48.7689 25.4528 48.0489 25.9756 47.1917 26.3356C46.3517 26.6956 45.4517 26.8756 44.4917 26.8756ZM40.4081 19.4442H47.8418C47.7786 18.9386 47.6477 18.4929 47.4489 18.107C47.1574 17.5241 46.746 17.0784 46.2146 16.7699C45.6831 16.4441 45.0403 16.2813 44.286 16.2813C43.4974 16.2813 42.8031 16.4527 42.2031 16.7956C41.6031 17.1384 41.1403 17.6184 40.8145 18.2356C40.6224 18.5997 40.4869 19.0025 40.4081 19.4442Z"
                fill="currentColor"
            />
            <path
                d="M30.5607 26.6185C31.1779 26.7899 31.8293 26.8756 32.515 26.8756C33.8864 26.8756 34.975 26.5413 35.7807 25.8728C36.6036 25.2042 37.015 24.2956 37.015 23.147C37.015 22.3927 36.8522 21.7842 36.5265 21.3213C36.2179 20.8584 35.815 20.4899 35.3179 20.2156C34.8207 19.9413 34.2979 19.727 33.7493 19.5727C33.2007 19.4013 32.6693 19.2384 32.155 19.0842C31.6579 18.9299 31.255 18.7413 30.9464 18.5184C30.6378 18.2956 30.4836 17.9784 30.4836 17.567C30.4836 17.1556 30.655 16.8384 30.9979 16.6156C31.3579 16.3756 31.8721 16.2556 32.5407 16.2556C33.175 16.2556 33.7407 16.3756 34.2379 16.6156C34.7522 16.8556 35.1807 17.1984 35.5236 17.6441L37.015 16.1527C36.535 15.4841 35.9179 14.987 35.1636 14.6613C34.4264 14.3184 33.5779 14.147 32.6179 14.147C31.7093 14.147 30.9293 14.2927 30.2778 14.5841C29.6436 14.8756 29.1464 15.2956 28.7864 15.8441C28.4264 16.3756 28.2464 17.0099 28.2464 17.747C28.2464 18.4841 28.4007 19.0756 28.7093 19.5213C29.035 19.967 29.4464 20.3184 29.9436 20.5756C30.4407 20.8327 30.9636 21.047 31.5121 21.2185C32.0779 21.3727 32.6093 21.5356 33.1064 21.707C33.6036 21.8613 34.0064 22.067 34.315 22.3242C34.6407 22.5642 34.8036 22.907 34.8036 23.3527C34.8036 23.7985 34.6064 24.1499 34.2122 24.407C33.8179 24.647 33.2607 24.767 32.5407 24.767C31.8207 24.767 31.1693 24.6385 30.5864 24.3813C30.0036 24.107 29.4893 23.6956 29.0436 23.147L27.5521 24.6385C27.9293 25.1013 28.375 25.5042 28.8893 25.847C29.4036 26.1728 29.9607 26.4299 30.5607 26.6185Z"
                fill="currentColor"
            />
        </Icon>
    )
}
