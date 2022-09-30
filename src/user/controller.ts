import { Router } from 'express'
import { User } from "../user/model"

// todo: transfer logic from service layer
export const userRouter = Router()
  .post('/', async (req, res, next) => {
    return res.json(await User.create(req.body))
  })
  .get('/', async (req, res, next) => {
    return res.json(await User.findAll())
  })
  .get('/:id', async (req, res, next) => {
    return res.json(await User.findByPk(req.params.id))
  })
  .put('/:id', async (req, res, next) => {
    return res.json(await User.update(req.body, { where: { id: req.params.id } }))
  })
  .delete('/:id', async (req, res, next) => {
    return res.json(await User.destroy({ where: { id: req.params.id } }))
  })