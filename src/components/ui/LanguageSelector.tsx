import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useTranslation } from 'react-i18next';

export function LanguageSelector() {
  const { t } = useTranslation();

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <Languages />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-40">
          <div className="grid gap-4">
            <div className="grid gap-2 items-center">
              <div className="grid items-center gap-4">
                <Button>{t('languageSelector.spanish')}</Button>
              </div>
              <div className="grid items-center gap-4">
                <Button>{t('languageSelector.english')}</Button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}
