export default class BaseRepository {
    model:any
    filters?:Record<string, unknown> 
    sorts?:Array<unknown>
    page?:{current:number, limit:number}

    constructor(model:any) {
        this.model = model
        //this.filters = {}
        this.sorts = []
        //this.page = {current: 0, limit: 0}
    }

    setPage(page=1, limit=15) {
        this.page = {current:page, limit}
        return this
    }

    getPageOpts() {
        if (!this.page) return null

        const {current, limit} = this.page
        const offset = (current - 1)*limit

        return {offset, limit}
    }

    sortBy(field:string, direction='ASC') {
        if (!this.sorts) this.sorts = []

        this.sorts.push({field, direction})
        return this
    }
}