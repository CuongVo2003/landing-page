interface ProductCardProps {
  image: string;
  badge?: string;
  name: string;
  originalPrice: string;
  salePrice: string;
}

export function ProductCard({
  image,
  badge,
  name,
  originalPrice,
  salePrice,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0px_2px_16px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full aspect-[4/3] object-cover rounded-xl"
        />
        {badge && (
          <div className="absolute top-3 right-3 bg-[#FF8C42] text-white text-xs font-bold px-3 py-1.5 rounded-full">
            {badge}
          </div>
        )}
      </div>

      <h3 className="mt-4 text-[#2C2416] font-bold text-xl">{name}</h3>

      <div className="flex items-center gap-3 mt-2">
        <span className="text-[#999999] line-through text-base">
          {originalPrice}
        </span>
        <span className="text-[#FF8C42] font-bold text-2xl">{salePrice}</span>
      </div>

      <button
        type="button"
        onClick={() => (window.location.href = "https://depda.click/cua-hang/")}
        className="w-full mt-4 bg-[#6B4423] text-white font-medium text-sm py-3 px-6 rounded-lg hover:bg-[#5a3a1e] transition-colors"
      >
        XEM CHI TIẾT
      </button>
    </div>
  );
}
