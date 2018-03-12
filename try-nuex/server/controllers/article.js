// 路由中间件函数
import mongoose from 'mongoose'
const Article = mongoose.model('Article')
export const getArticles = async(ctx, next) => {//next 交给下一个 不会505 交出访问的控制权
    // articles
    // await articles.find() //返回的是一个游标 默认mongodb返回20条数据
    // 分页 每一页多少条 limit
    // let page = ctx.params.page || 0
    // let limit = ctx.params.limit || 0
    let { page = 1 , limit = 15 } = ctx.params//从多少条开始查
    page = Number((page - 1)*limit) || 0
    limit = Number(limit) || 15
    try {
        let total = await Article.find({
            publish: true
        }).exec()
        total = total.length//有多少篇数据
        const data = await Article.find({
            publish: true
        }).skip(page).limit(limit).sort({'createdAt': -1}).exec()
        ctx.body = {
            success: true,
            data: data,
            total: total
        }
    }catch(e){
        ctx.body = {
            success: false,
            err: e,
            total: 0
        }
    }
}