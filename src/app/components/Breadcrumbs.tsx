import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
      <div className="container">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
              🏠 Início
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              {item.href ? (
                <Link href={item.href} className="text-blue-600 hover:text-blue-800 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-600 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs; 