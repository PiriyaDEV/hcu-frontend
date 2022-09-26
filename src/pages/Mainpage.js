import React from "react";

export default function Mainpage() {
  return (
    <div id="mainpage" className="pb-[100px]">
      <div className="h-[480px] bg-[#F8F8F8] border-b border-[#D9D9D9]" />
      <div className="section">
        <div className="page-container">
          <div>
            <h1 className="pt-[60px] text-[32px] text-left">บริการของเรา</h1>

            <div className="flex items-center justify-around mt-[40px]">
              {[...Array(5)].map((x, i) => (
                <div className="flex flex-col justify-center items-center gap-[14px]">
                  <img
                    className="h-[132px] w-[132px] rounded-full border-2 border-[#696969] object-cover"
                    src="https://previews.123rf.com/images/rglinsky/rglinsky1201/rglinsky120100188/12336990-vertical-oriented-image-of-famous-eiffel-tower-in-paris-france-.jpg"
                    alt=""
                  />
                  <h1 className="text-[24px]">Health Care</h1>
                  <p className="text-[18px] text-[#696969]">
                    แซ็กเปปเปอร์มินต์พลาซ่าลาติน
                    กรุ๊ปฮันนีมูนคอมเพล็กซ์บ๊วยเฟอร์นิเจอร์
                    รายชื่อโมเต็ลกิมจิริก
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
