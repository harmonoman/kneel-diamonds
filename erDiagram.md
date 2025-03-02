```mermaid
erDiagram

    METALS }o--o{ ORDERS : includes
    SIZES }o--o{ ORDERS : includes
    STYLES }o--o{ ORDERS : includes



    ORDERS {
        int orderId 
        date orderDate
        int metalsId fk
        int sizesId fk
        int stylesId fk
    }
    METALS {
        int id pk
        string metal
        float price
    }
    SIZES {
        int id pk
        float carets
        float price
    }
    STYLES {
        int id pk
        string style
        float price
    }