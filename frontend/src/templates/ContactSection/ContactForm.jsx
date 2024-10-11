import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "../../atoms/Button/Button.jsx";
import "./ContactSection.css"
import emailjs from 'emailjs-com';

const validationSchema = yup.object({
    name: yup.string(),
    email: yup.string().required("Укажите электронную почту!").email("Неверный адрес электронной почты."),
    text: yup.string().required("Напишите что-нибудь!"),
    agreeTerms: yup.bool().oneOf([true], "Подтвердите своё согласие!")
}).required()

const Input = ({register, label, name, type}) => {
    return (
        <div className='contact-fields'>
            <label className='contact-label'>{label}</label>
            <input className='contact-input' {...register(name)} name={name} type={type} />
        </div>
    )
}

const Checkbox = ({register, label, name}) => {
    return (
        <div className="checkbox-field">
            <input {...register(name)} type="checkbox" id={name}/>
            <label htmlFor={name}>{label}</label>
        </div>
    )
}

export default function ContactForm() {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            name: "",
            email: "",
            theme: "",
            text: "",
            agreeTerms: false
        }
    })
    const onSubmit = (data) => {
        emailjs.send('service_8toh6kq', 'template_hjj218t', data, 'h7r78F3JOFCt5KrtV')
            .then((result) => {
                alert('Сообщение отправлено!');
            }, (error) => {
                console.error(error.text);
                alert('Ошибка при отправке сообщения.');
            });
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input register={register} label='Имя' name='name' type='text'/>

            <Input register={register} label='Электронная почта' name='email' type='text'/>
            {errors.email && (<span className='contact-error'>{errors.email.message}</span>)}

            <label className='contact-label'></label>
            <select {...register("theme")} id="theme">
                <option value="Idea">Предложить идею</option>
                <option value="Complain">Пожаловаться руководству</option>
                <option value="Calling">Заказать звонок</option>
                <option value="Problem">Ошибка в описании товара</option>
            </select>

            <Input register={register} label='Сообщение' name='text' type='text'/>
            {errors.text && (<span className='contact-error'>{errors.text.message}</span>)}

            <Checkbox register={register} label='Я даю согласие на обработку персональных данных.' name='agreeTerms' />
            {errors.agreeTerms && (<span className='contact-error'>{errors.agreeTerms.message}</span>)}
            <Button className='button'>Отправить</Button>
        </form>
    )
}