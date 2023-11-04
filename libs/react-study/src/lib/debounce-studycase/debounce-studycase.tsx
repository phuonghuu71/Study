import React from 'react';
import debounce from 'lodash.debounce';

const mockAPIResult = ['John', 'Jake', 'Rosanne', 'Emily'];

const getMockApi = async (search: string) => {
  console.log('making new api request');
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return mockAPIResult.filter((result) =>
    result.toLowerCase().includes(search.toLowerCase())
  );
};

export function DebounceStudycase() {
  const [search, setSearch] = React.useState<string>('');
  const [searchResult, setSearchResult] = React.useState<string[]>([]);

  const debounceRequest = React.useCallback((search: string) => {
    const request = debounce(async (search: string) => {
      const result = await getMockApi(search);
      setSearchResult(result);
    }, 500);

    request(search);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    debounceRequest(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleSearch} />

      {searchResult.map((result, i) => (
        <p key={i}>{result}</p>
      ))}
    </div>
  );
}

export default DebounceStudycase;
