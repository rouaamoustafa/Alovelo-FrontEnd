// components/Footer.js
import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Row */}
      <div className={styles.footerTop}>
        {/* Column 1: Logo */}
        <div className={styles.footerColumn}>
          <div className={styles.footerLogo}>
          <svg
              width="221"
              height="33"
              viewBox="0 0 221 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_195_67)">
                <path
                  d="M26.2475 17.7846L32.8392 32.6357H28.1424L24.6975 24.6233H8.05224L4.60736 32.6357H0L13.969 0.428223H18.3975L22.3023 8.75385L17.8248 8.6239L16.3749 5.25146L9.61925 20.3582H23.1305L21.7657 17.7846H26.2475Z"
                  fill="white"
                />
                <path
                  d="M59.2442 28.6519V32.6357H37.8148V28.6071L59.2442 28.6519ZM37.8148 17.7016V0.428223H42.288V17.7016"
                  fill="white"
                />
                <path
                  d="M185.385 28.6519V32.6357H163.955V28.6071L185.385 28.6519ZM163.955 17.7016V0.428223H168.428V17.7016"
                  fill="white"
                />
                <path
                  d="M66.3149 15.4284C66.4661 13.5707 66.9792 11.8664 67.8564 10.3112C68.9146 8.43216 70.3772 6.96218 72.2402 5.89271C74.1032 4.82538 75.9704 4.29065 78.2677 4.29065C80.565 4.29065 82.6302 4.82538 84.4633 5.89271C85.6343 6.57444 87.4909 8.55572 87.4909 8.55572C87.4909 8.55572 90.923 7.81647 92.4432 7.41382C91.0614 5.30046 89.241 3.60891 86.982 2.34558C84.4463 0.926733 81.6146 0.00213623 78.4827 0.00213623C75.3508 0.00213623 72.4723 0.711562 69.9365 2.13041C67.4008 3.54926 65.4101 5.72654 63.9644 8.22977C62.5166 10.733 61.7949 13.526 61.7949 16.6087C61.7949 16.7791 61.797 16.9495 61.8012 17.12C61.8012 17.1434 61.8034 17.1903 61.8034 17.1903L66.3107 15.4987C66.3107 15.4987 66.3128 15.454 66.3149 15.4327V15.4284Z"
                  fill="white"
                />
                <path
                  d="M90.4886 18.8584L95.0726 17.0837C95.0023 20.0067 94.2912 22.6505 92.9307 25.011C91.5 27.4993 89.5156 29.4529 86.9799 30.8717C84.4441 32.2906 81.6124 33.0021 78.4805 33.0021C75.3486 33.0021 72.4701 32.2927 69.9344 30.8717C68.329 29.9727 66.9408 28.6412 65.772 27.3076C67.356 26.7537 68.6079 26.2743 70.1409 25.6586C70.6774 26.1103 71.825 26.9646 72.4509 27.3225C74.3139 28.3919 76.3962 28.9267 78.6913 28.9267C80.9865 28.9267 82.8388 28.3919 84.6741 27.3225C86.5094 26.253 87.955 24.7809 89.0132 22.904C89.7072 21.6726 90.1714 20.3454 90.412 18.9244"
                  fill="white"
                />
                <path
                  d="M192.242 15.4284C192.393 13.5707 192.907 11.8664 193.784 10.3112C194.842 8.43216 196.305 6.96218 198.168 5.89271C200.031 4.82538 201.898 4.29065 204.195 4.29065C206.492 4.29065 208.558 4.82538 210.391 5.89271C211.562 6.57444 213.418 8.55572 213.418 8.55572C213.418 8.55572 216.85 7.81647 218.371 7.41382C216.989 5.30046 215.168 3.60891 212.909 2.34558C210.374 0.926733 207.542 0.00213623 204.41 0.00213623C201.278 0.00213623 198.4 0.711562 195.864 2.13041C193.328 3.54926 191.337 5.72654 189.892 8.22977C188.444 10.733 187.722 13.526 187.722 16.6087C187.722 16.7791 187.724 16.9495 187.729 17.12C187.729 17.1434 187.731 17.1903 187.731 17.1903L192.238 15.4987C192.238 15.4987 192.24 15.454 192.242 15.4327V15.4284Z"
                  fill="white"
                />
                <path
                  d="M216.416 18.8584L221 17.0837C220.93 20.0067 220.219 22.6505 218.858 25.011C217.427 27.4993 215.443 29.4529 212.907 30.8717C210.372 32.2906 207.54 33.0021 204.408 33.0021C201.276 33.0021 198.398 32.2927 195.862 30.8717C194.256 29.9727 192.868 28.6412 191.699 27.3076C193.283 26.7537 194.535 26.2743 196.068 25.6586C196.605 26.1103 197.752 26.9646 198.378 27.3225C200.241 28.3919 202.324 28.9267 204.619 28.9267C206.914 28.9267 208.766 28.3919 210.601 27.3225C212.437 26.253 213.882 24.7809 214.941 22.904C215.635 21.6726 216.099 20.3454 216.339 18.9244"
                  fill="white"
                />
                <path
                  d="M125.8 8.80284L129.323 0.581604H124.848L121.301 8.80284H125.8Z"
                  fill="white"
                />
                <path
                  d="M117.29 17.5972L113.27 26.9113L109.069 17.5972H104.266L111.158 32.6357H115.373L121.816 17.5972H117.29Z"
                  fill="white"
                />
                <path
                  d="M105.088 8.80284L101.568 0.581604H96.7354L100.27 8.80284H105.088Z"
                  fill="white"
                />
                <path
                  d="M155.303 18.5175V14.4101H139.6V4.56546H157.227V0.581604H134.912V18.5473L155.303 18.5175Z"
                  fill="white"
                />
                <path
                  d="M139.385 28.4367V28.4005H134.912V32.4205H157.638V28.4367H139.385Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_195_67">
                  <rect width="221" height="33" fill="white" />
                </clipPath>
              </defs>
              className={styles.logoImage}
            </svg>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className={styles.footerColumn}>
          <h4>NAVIGATION</h4>
          <ul>
  <li><Link href="/">Home</Link></li>
  <li><Link href="/about">About Us</Link></li>
  <li><Link href="/services">Services</Link></li>
  <li><Link href="/contact">Contact Us</Link></li>
</ul>
        </div>

        {/* Column 3: Quick Action */}
        <div className={styles.footerColumn}>
          <h4>Quick Action</h4>
          <ul>
            <li>Booking</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 4: Platform */}
        <div className={styles.footerColumn}>
          <h4>Platform</h4>
          <ul>
            <li>
              <Image
                src="/🦆 icon _Instagram_.png"
                alt="Instagram"
                width={25}
                height={25}
                unoptimized
              />
            </li>
            <li>
              <Image
                src="/🦆 icon _Facebook Square_.png"
                alt="Facebook"
                width={25}
                height={25}
                unoptimized
              />
            </li>
            <li>
              <Image
                src="/🦆 icon _What's App_.png"
                alt="WhatsApp"
                width={25}
                height={25}
                unoptimized
              />
            </li>
          </ul>
        </div>
      </div>

      {/* Middle Row: Icons (Location, Phone, Email) */}
      <div className={styles.footerIcons}>
        <div title="Location">
          <Image
            src="/image 21.png"
            alt="Location Icon"
            width={35}
            height={35}
            unoptimized
          />
        </div>
        <div title="Phone">
          <Image
            src="/image 20.png"
            alt="Phone Icon"
            width={35}
            height={35}
            unoptimized
          />
        </div>
        <div title="Email">
          <Image
            src="/image19.png"
            alt="Email Icon"
            width={35}
            height={35}
            unoptimized
          />
        </div>
      </div>
<hr className={styles.hr}/>
      {/* Bottom Row */}
      <div className={styles.footerBottom}>Copyright &copy; All Rights Reserved</div>
    </footer>
  );
}
