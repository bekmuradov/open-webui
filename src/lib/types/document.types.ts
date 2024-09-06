type AppDocumentTag = {
    name: string;
};

export type AppDocumentTags = AppDocumentTag[];
  
type AppDocumentContent = {
    tags?: AppDocumentTags;
};

type AppDocumentSelectedStatus = 'checked' | 'unchecked';
  
export type AppDocument = {
    collection_name: string;
    name: string;
    title: string;
    filename: string;
    content: AppDocumentContent;
    user_id: string;
    timestamp: number;
    selected?: AppDocumentSelectedStatus;
};

export type AppDocuments = AppDocument[];
  