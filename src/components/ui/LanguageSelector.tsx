import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useTranslation } from 'react-i18next';

export function LanguageSelector() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang: string) => i18n.changeLanguage(lang);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Languages />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => changeLanguage('es')}>{t('languageSelector.spanish')}</DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage('en')}>{t('languageSelector.english')}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
