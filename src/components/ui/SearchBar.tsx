import { useTranslation } from 'react-i18next';
import { Input } from './input';

export function SearchBar() {
  const { t } = useTranslation();
  return (
    <>
      <Input id="search" type="text" name="search" placeholder={t('search.placeholder')} />
    </>
  );
}
