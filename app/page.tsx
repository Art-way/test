import { redirect } from 'next/navigation';

// هذه الصفحة تقوم فقط بإعادة التوجيه إلى اللغة الافتراضية
// ولا تعرض أي محتوى HTML
export default function RootPage() {
  const defaultLocale = 'en';
  redirect(`/${defaultLocale}`);
}