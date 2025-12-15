import { useState } from "react";
import { ProductCard } from "./components/ProductCard";
import { TrustBadge } from "./components/TrustBadge";
import {
  Check,
  Shield,
  RotateCcw,
  DollarSign,
  Headphones,
  Sparkles,
  Award,
  Heart,
} from "lucide-react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    size: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to the thank-you page after form submission
    window.location.href = "http://edu.ladipage.me/thank-you";
  };

  const products = [
    {
      image:
        "https://depda.click/wp-content/uploads/2025/11/d29e381f-a389-4663-aec2-4f87edb11e60-510x510.png",
      badge: "Best Seller",
      name: "Dép Da Classic Brown",
      originalPrice: "1.500.000đ",
      salePrice: "999.000đ",
    },
    {
      image:
        "https://depda.click/wp-content/uploads/2025/11/d29e381f-a389-4663-aec2-4f87edb11e67-510x514.png",
      badge: "Da thật 100%",
      name: "Dép Da Premium Tan",
      originalPrice: "1.800.000đ",
      salePrice: "1.299.000đ",
    },
    {
      image:
        "https://phukienlamdoda.com/wp-content/uploads/2023/12/Dep-nam-Hermes-nau-3.jpg",
      badge: "Thủ công",
      name: "Dép Da Handmade Deluxe",
      originalPrice: "2.200.000đ",
      salePrice: "1.599.000đ",
    },
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Da Bò Thật 100%",
      description: "Nguồn gốc rõ ràng, không da tổng hợp",
    },
    {
      icon: Award,
      title: "Thủ Công Tinh Xảo",
      description: "Từng đường kim mũi chỉ tỉ mỉ",
    },
    {
      icon: Heart,
      title: "Êm Ái Cả Ngày",
      description: "Lót đế êm, thoáng khí, chống mùi",
    },
    {
      icon: Check,
      title: "Bền Vững Lâu Dài",
      description: "Chất lượng theo thời gian",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] lg:min-h-[720px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(44, 36, 22, 0.4), rgba(44, 36, 22, 0.4)), url('https://images.unsplash.com/photo-1625318880107-49baad6765fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21mb3J0YWJsZSUyMGxlYXRoZXIlMjBzYW5kYWxzfGVufDF8fHx8MTc2NTc3MTc1NHww&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        />

        <div className="relative z-10 text-center px-6 lg:px-10 max-w-4xl mx-auto">
          <div
            className="mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <h1 className="text-white text-3xl lg:text-[32px] font-bold mb-12">
              DÉP DA
            </h1>
          </div>

          <h2
            className="text-white text-4xl lg:text-[64px] font-bold mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "-1px",
              lineHeight: "1.2",
            }}
          >
            ĐẲNG CẤP TRÊN TỪNG BƯỚC CHÂN
          </h2>

          <p className="text-white text-lg lg:text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Dép da thủ công cao cấp – da thật 100%, thiết kế tối giản, êm ái và
            bền bỉ theo thời gian.
          </p>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-12 mb-12">
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-[#FF8C42]" />
              <span className="text-white font-medium">Da thật 100%</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-[#FF8C42]" />
              <span className="text-white font-medium">Thủ công cao cấp</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-[#FF8C42]" />
              <span className="text-white font-medium">Bảo hành trọn đời</span>
            </div>
          </div>

          <button className="bg-[#FF8C42] text-white font-bold text-lg px-10 py-4 rounded-lg shadow-[0px_4px_12px_rgba(255,140,66,0.3)] hover:bg-[#FF7A2E] hover:scale-105 transition-all">
            XEM MẪU DÉP ĐẸP
          </button>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 lg:py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[60%_40%] gap-10 lg:gap-20 items-center">
            <div>
              <h2
                className="text-[#6B4423] text-3xl lg:text-[48px] font-bold mb-6 leading-[1.3]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                DÉP DA DÀNH CHO NGƯỜI ĐỀ CAO SỰ THOẢI MÁI & TINH TẾ
              </h2>

              <p className="text-[#2C2416] text-lg leading-[1.8] mb-8 max-w-[560px]">
                Mỗi đôi dép được chế tác từ da bò thật 100%, qua bàn tay những
                nghệ nhân lành nghề với hơn 20 năm kinh nghiệm. Chúng tôi tin
                rằng sự thoải mái và phong cách không bao giờ phải đánh đổi cho
                nhau.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4CAF50] mt-1 flex-shrink-0" />
                  <span className="text-[#2C2416] font-medium">
                    Da bò nguyên tấm, không ghép vụn, mềm mại và thấm hút mồ hôi
                    tốt
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4CAF50] mt-1 flex-shrink-0" />
                  <span className="text-[#2C2416] font-medium">
                    Thiết kế tối giản, thanh lịch, dễ phối với mọi trang phục
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4CAF50] mt-1 flex-shrink-0" />
                  <span className="text-[#2C2416] font-medium">
                    Đế êm chống sốc, phù hợp đi cả ngày mà không mỏi chân
                  </span>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1564842505181-8862a3b9b173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwc2FuZGFscyUyMHRleHR1cmUlMjBicm93bnxlbnwxfHx8fDE3NjU3NzE3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dép da cao cấp"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 lg:py-[100px] bg-[#FFF8F0]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2
            className="text-[#6B4423] text-3xl lg:text-[44px] font-bold text-center mb-12 lg:mb-[60px]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            CÁC MẪU DÉP DA ĐƯỢC ƯA CHUỘNG
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 lg:py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <img
                src="https://depda.click/wp-content/uploads/2025/11/d29e381f-a389-4663-aec2-4f87edb11e54-510x503.jpg"
                alt="Trải nghiệm dép da"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-xl shadow-lg"
              />
            </div>

            <div>
              <h2
                className="text-[#6B4423] text-3xl lg:text-[44px] font-bold mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                ÊM ÁI – CHẮC CHẮN – TỰ TIN MỖI NGÀY
              </h2>

              <p className="text-[#2C2416] text-lg leading-[1.8] mb-10 max-w-[480px]">
                Không chỉ là dép, đây là người bạn đồng hành tin cậy trong mọi
                hoạt động hàng ngày. Từ văn phòng đến dạo phố, từ buổi gặp gỡ
                bạn bè đến những chuyến đi xa.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-left">
                    <feature.icon
                      className="w-12 h-12 text-[#FF8C42] mb-3"
                      strokeWidth={1.5}
                    />
                    <h3 className="text-[#2C2416] font-bold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#666666] text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 lg:py-20 bg-[#FFF8F0]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2
            className="text-[#6B4423] text-3xl lg:text-[44px] font-bold text-center mb-12 lg:mb-[60px]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            CAM KẾT TỪ DEPDA
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <TrustBadge
              icon={Shield}
              title="Da Thật Đúng Mô Tả"
              description="Cam kết 100% da bò thật, hoàn tiền gấp đôi nếu phát hiện da giả"
            />
            <TrustBadge
              icon={DollarSign}
              title="Hoàn Tiền Dễ Dàng"
              description="7 ngày đổi trả miễn phí nếu không hài lòng về chất lượng"
            />
            <TrustBadge
              icon={RotateCcw}
              title="Đổi Size Nhanh Chóng"
              description="Đổi size miễn phí trong 30 ngày đầu sử dụng"
            />
            <TrustBadge
              icon={Headphones}
              title="Hỗ Trợ 24/7"
              description="Đội ngũ tư vấn nhiệt tình, giải đáp mọi thắc mắc bất cứ lúc nào"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-[100px] bg-white">
        <div className="max-w-[600px] mx-auto px-6 lg:px-10">
          <h2
            className="text-[#6B4423] text-3xl lg:text-[40px] font-bold text-center mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            NHẬN TƯ VẤN & ĐẶT DÉP PHÙ HỢP
          </h2>

          <p className="text-[#666666] text-center mb-10">
            Để lại thông tin, chúng tôi sẽ gọi tư vấn size và mẫu phù hợp nhất
            với bạn
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Họ và tên"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full bg-white border border-[#D4C4B0] rounded-lg px-4 py-3.5 focus:border-[#FF8C42] focus:outline-none focus:ring-2 focus:ring-[#FF8C42]/10 transition-all"
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Số điện thoại"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                className="w-full bg-white border border-[#D4C4B0] rounded-lg px-4 py-3.5 focus:border-[#FF8C42] focus:outline-none focus:ring-2 focus:ring-[#FF8C42]/10 transition-all"
              />
            </div>

            <div>
              <select
                value={formData.size}
                onChange={(e) =>
                  setFormData({ ...formData, size: e.target.value })
                }
                required
                className="w-full bg-white border border-[#D4C4B0] rounded-lg px-4 py-3.5 focus:border-[#FF8C42] focus:outline-none focus:ring-2 focus:ring-[#FF8C42]/10 transition-all"
              >
                <option value="">Chọn size dép</option>
                <option value="38">Size 38</option>
                <option value="39">Size 39</option>
                <option value="40">Size 40</option>
                <option value="41">Size 41</option>
                <option value="42">Size 42</option>
                <option value="43">Size 43</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF8C42] text-white font-bold text-lg px-10 py-4 rounded-lg shadow-[0px_4px_12px_rgba(255,140,66,0.3)] hover:bg-[#FF7A2E] transition-all"
            >
              GỬI THÔNG TIN – ĐƯỢC TƯ VẤN
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2416] text-white py-12 lg:py-[60px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-10 lg:gap-20 mb-10">
            <div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                DÉP DA
              </h3>
              <p className="text-white/70 text-sm">
                Đẳng cấp trên từng bước chân
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Liên Hệ</h4>
              <div className="space-y-2 text-sm text-white/80">
                <p>📞 Hotline: 1900 xxxx</p>
                <p>✉️ Email: contact@depda.vn</p>
                <p>🕐 Giờ làm việc: 8h - 22h hàng ngày</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Kết Nối</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-white/20">
            <p className="text-white/50 text-sm">
              © 2024 Dép Da. Bản quyền thuộc về công ty TNHH Dép Da Việt Nam.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
