import repositories from '@/repositories.js'
import models from '@/models.js'

type GetOneUser = {
  id: string;
  name: string;
  language: string;
};

function getOne(id:string):GetOneUser {
  const user = models.user.findOne(id)
  const result = user.get({plain:true})
  return result
}

export default {getOne};
