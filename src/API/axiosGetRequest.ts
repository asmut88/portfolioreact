import axios, { AxiosError } from "axios"

//**Создадим instance с настройками по умолчанию*/
const instance = axios.create({
   baseURL: '',
   timeout: 1000,
})

async function GetRequest<T>(
   URI: string,
   validateStatus: () => true) //**Исключения будут создаваться если код ответа < 100 ИЛИ > 300*/
{
   try {
      const res = await instance.get<T>(URI)
      console.log(res)
      return res.data
   } catch (err) {
      if (axios.isAxiosError(err)) {
         console.error(err);
       } else {
         console.error(err);
       }
   }

}

export { GetRequest }

