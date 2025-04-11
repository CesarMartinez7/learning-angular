export default interface Book{
    numFound:       number
    start:          number
    numFoundExact: boolean
    num_found:      number
    documentation_url: string
    q: string
    offset: null | undefined
    docs: Array<Docs>
}


interface Docs {
    author_key:     string[]
    author_name:    string[]
    cover_edition_key: string
    cover_i:        number
    edition_count:  number
    first_publish_year: number
    has_fulltext:   boolean
    ia:             string[]
    ia_collection:  string
    key:            string
    language:       unknown[]
    lending_edition_s: string
    lending_identifier_s: string
    public_scan_b:  boolean
    title:          string

}