export namespace LanguagesModel {
  export interface Languages {
    name: string;
    description: string;
    link: string;
  }
  export const LANGUAGES: Languages[] = [
    {
      name: 'Java',
      description: 'Description of App 3',
      link: 'https://example.com/app3',
    },
    {
      name: 'JS',
      description: 'Description of App 4',
      link: 'https://example.com/app4',
    },
    {
      name: 'MySQL',
      description: 'Description of App 6',
      link: 'https://example.com/app6',
    }
  ];
}

