import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addTodo } from "../redux/actions/todoActions";
import axios from "axios";

const AddForm = () => {
    //dispatch kurulum
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        // todo objesi oluşturma
        const newTodo = {
            id: v4(),
            text: e.target[0].value,
            isDone: false,
            created_at: new Date(),
        }

        //objeyi veri tabanına ekle
        axios.post("/todos", newTodo).then(() => dispatch(addTodo(newTodo))).catch(() => alert("Error"))
        // then ile bağlamazsak örneğin siparişiniz alındı yazar ama postu hatalı yazıp
        // ("/todos1") şeklinde yapmışsınızdır, sipariş alınmaz. Bu gibi hatalar sizi sıkıntıya sokar
        // bunları bağladığında istekte hata varsa then kısmına geçmez(veritabanına eklendiyse storu güncelle)

        // todo'yu store'a ekleme(1. aşama)  
        // 1- Store'lar reducer ile çalıştığı için önce reducer'a öncelikle dispatch ile güncelleme emri(action)
        // göndermeliyim. (Dispatch({type:"", data:/ })       
        // 2- İlgili type'daki reducer çalıştığında store'da nasıl bir değişim olacak. Bunu düzenle
        // değiştiriyo ve değişim tüm bileşenlere gidiyo

        // UNEFFICIENT
        // dispatch({
        //     type: ActionTypes.ADD_TODO,
        //     payload: newTodo,
        // })

        //EFICIENT
        //dispatch(addTodo(newTodo));
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex gap-2 justify-content-center">
            <input className="form-control" type="text" />
            <button className="btn btn-lg btn-outline-light">Add </button>
        </form>
    )
}
export default AddForm