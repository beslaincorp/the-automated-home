import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card flex flex-col h-full relative">
      {product.badge && (
        <span className="absolute -top-3 right-4 rounded-full bg-electric-600 px-3 py-1 text-xs font-semibold text-white">
          {product.badge}
        </span>
      )}

      <div className="flex-1">
        <h3 className="text-lg font-bold text-white">{product.title}</h3>
        <p className="mt-2 text-sm text-gray-400 leading-relaxed">
          {product.description}
        </p>

        <ul className="mt-4 space-y-2">
          {product.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-2xl font-bold text-white">{product.price}</span>
        <a
          href={product.gumroadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm"
        >
          Get It Now
        </a>
      </div>
    </div>
  );
}
