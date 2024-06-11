// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

// The following are some examples of how this class is used:

// let helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4)
// helper.pageCount() // should == 2
// helper.itemCount() // should == 6
// helper.pageItemCount(0) // should == 4
// helper.pageItemCount(1) // last page - should == 2
// helper.pageItemCount(2) // should == -1 since the page is



class PaginationHelper<T> {
    collection: T[];
    itemsPerPage: number;

    constructor(collection: T[], itemsPerPage: number) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    pageCount(): number {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }

    itemCount(): number {
        return this.collection.length;
    }

    pageItemCount(pageIndex: number): number {
        if (pageIndex < 0 || pageIndex >= this.pageCount()) return -1;
        if (pageIndex === this.pageCount() - 1) {
            return this.collection.length % this.itemsPerPage || this.itemsPerPage;
        }
        return this.itemsPerPage;
    }

    pageIndex(itemIndex: number): number {
        if (itemIndex < 0 || itemIndex >= this.itemCount()) return -1;
        return Math.floor(itemIndex / this.itemsPerPage);
    }
}