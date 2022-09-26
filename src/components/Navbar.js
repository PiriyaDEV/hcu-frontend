import React from "react";

export default function Navbar() {
  return (
    <div id="navbar">
      <p className="bg-[#696969] w-full text-center text-white text-[16px]">
        King Mongkut's University of Technology Thonburi (KMUTT)
      </p>

      <div className="bg-[#D9D9D9] section">
        <div className="navbar-container py-[20px] flex justify-between items-center">
          <div className="flex divide-x divide-[#696969] gap-[19px] py-[2px]">
            <p className="text-[32px] text-[#696969] text-left leading-7">
              KM
              <br />
              UTT
            </p>
            <p className="text-[24px] text-[#696969] text-left leading-7 pl-[19px]">
              กลุ่มงานบริการสุขภาพ
              <br />
              และอนามัย
            </p>
          </div>

          <div className="section gap-[20px]">
            <p className="text-[20px] text-[#696969]">Tel. 0-2470-8446</p>
            <div className="section gap-[6px]">
              <span className="rounded-full border-2 border-[#696969] w-[31px] h-[31px]" />
              <p className="text-[18px] text-[#696969]">TH</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section py-[13px] border-b border-[#D9D9D9]">
        <div className="navbar-container flex items-center justify-around">
          <h1 className="text-[20px] text-black">บริการ</h1>
          <h1 className="text-[20px] text-black">ข่าวสารกิจกรรม</h1>
          <h1 className="text-[20px] text-black">นัดหมาย</h1>
          <h1 className="text-[20px] text-black">ติดต่อเรา</h1>
        </div>
      </div>
    </div>
  );
}
