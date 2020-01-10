export type ODataOrderBy = 'asc' | 'desc';
export type ODataOrderByType<T> = { property: keyof T, orderBy: ODataOrderBy};
