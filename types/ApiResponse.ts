export interface Result {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: unknown;
  mime: string;
  fileFormat: string;
  image: {
    contextLink: string;
    height: number;
    width: number;
    byteSize: number;
    thumbnailLink: string;
    thumbnailHeight: number;
    thumbnailWidth: number;
  };
  labels: [
    {
      name: string;
      displayName: string;
      label_with_op: string;
    }
  ];
}

export interface Promotion {
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  bodyLines: [
    {
      title: string;
      htmlTitle: string;
      url: string;
      link: string;
    }
  ];
  image: {
    source: string;
    width: number;
    height: number;
  };
}

export interface ApiResponse {
  kind: string;
  url: {
    type: string;
    template: string;
  };
  queries: {
    previousPage: [
      {
        title: string;
        totalResults: string;
        searchTerms: string;
        count: number;
        startIndex: number;
        startPage: number;
        language: string;
        inputEncoding: string;
        outputEncoding: string;
        safe: string;
        cx: string;
        sort: string;
        filter: string;
        gl: string;
        cr: string;
        googleHost: string;
        disableCnTwTranslation: string;
        hq: string;
        hl: string;
        siteSearch: string;
        siteSearchFilter: string;
        exactTerms: string;
        excludeTerms: string;
        linkSite: string;
        orTerms: string;
        relatedSite: string;
        dateRestrict: string;
        lowRange: string;
        highRange: string;
        fileType: string;
        rights: string;
        searchType: string;
        imgSize: string;
        imgType: string;
        imgColorType: string;
        imgDominantColor: string;
      }
    ];
    request: [
      {
        title: string;
        totalResults: string;
        searchTerms: string;
        count: number;
        startIndex: number;
        startPage: number;
        language: string;
        inputEncoding: string;
        outputEncoding: string;
        safe: string;
        cx: string;
        sort: string;
        filter: string;
        gl: string;
        cr: string;
        googleHost: string;
        disableCnTwTranslation: string;
        hq: string;
        hl: string;
        siteSearch: string;
        siteSearchFilter: string;
        exactTerms: string;
        excludeTerms: string;
        linkSite: string;
        orTerms: string;
        relatedSite: string;
        dateRestrict: string;
        lowRange: string;
        highRange: string;
        fileType: string;
        rights: string;
        searchType: string;
        imgSize: string;
        imgType: string;
        imgColorType: string;
        imgDominantColor: string;
      }
    ];
    nextPage: [
      {
        title: string;
        totalResults: string;
        searchTerms: string;
        count: number;
        startIndex: number;
        startPage: number;
        language: string;
        inputEncoding: string;
        outputEncoding: string;
        safe: string;
        cx: string;
        sort: string;
        filter: string;
        gl: string;
        cr: string;
        googleHost: string;
        disableCnTwTranslation: string;
        hq: string;
        hl: string;
        siteSearch: string;
        siteSearchFilter: string;
        exactTerms: string;
        excludeTerms: string;
        linkSite: string;
        orTerms: string;
        relatedSite: string;
        dateRestrict: string;
        lowRange: string;
        highRange: string;
        fileType: string;
        rights: string;
        searchType: string;
        imgSize: string;
        imgType: string;
        imgColorType: string;
        imgDominantColor: string;
      }
    ];
  };
  promotions: Promotion[];
  context: unknown;
  searchInformation: {
    searchTime: number;
    formattedSearchTime: string;
    totalResults: string;
    formattedTotalResults: string;
  };
  spelling: {
    correctedQuery: string;
    htmlCorrectedQuery: string;
  };
  items: Result[];
}
