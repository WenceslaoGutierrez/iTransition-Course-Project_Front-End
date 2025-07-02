import { LanguageSelector } from '@/components/ui/LanguageSelector';
import { SearchBar } from '@/components/ui/SearchBar';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import Layout from '@/Layout';

export default function Dashboard() {
  return (
    <>
      <Layout>
        <LanguageSelector />
        <ThemeToggle />
      </Layout>
    </>
  );
}
