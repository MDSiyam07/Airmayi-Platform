"use client"

import { useRouter, usePathname } from '@/navigation';

export default function LanguageChanger({ locale }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = e => {
    router.push(pathname, { locale: e.target.value });
  };

  return (
    <select value={locale} onChange={handleChange}>
      <option value="fr">Français</option>
      <option value="en">English</option>
      <option value="ja">日本語</option>
      <option value="es">Español</option>
    </select>
  );
}