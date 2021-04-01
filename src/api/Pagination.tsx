export interface PaginationLink {
    url: string | undefined;
    label: string;
    active: boolean; 
}

export default interface Pagination {
    from: number;
    to: number;
    total: number;
    per_page: number;
    path: string;

    prev_page_url: string;
    first_page_url: string;
    next_page_url: string;
    last_page_url: string;
    last_page: number;

    current_page: number;

    links: Array<PaginationLink>;
}