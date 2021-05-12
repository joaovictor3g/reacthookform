import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { Formulary } from './styles';

interface IFormInputs {
    name: string,
    cpf: string,
    birthday: Date;
    phone: string;
    email: string;
    address: {
        number: number;
        street: string;
    }
  };

export function Form() {
    const { register, formState: { errors }, handleSubmit, control } = useForm<IFormInputs>();
    const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);

    return (
        <Formulary onSubmit={handleSubmit(onSubmit)}>
            <div className="personal-info-container">
                <input {...register("name")} />
      
                {/* include validation with required or other standard HTML validation rules */}
                <Controller 
                    rules={{ required: true }}
                    name="cpf"
                    control={control}
                    render={({ field }) => (
                        <InputMask 
                            {...register("cpf")} 
                            mask="999.999.999-99" 
                            {...field} 
                        />
                    )}
                />
                {/* errors will return when field validation fails  */}
                {errors.cpf && <span>This field is required</span>}
                <input {...register("birthday")} type="date" />
                <input {...register("phone")} />
                <input {...register("email")} />
            </div>
            
            <div className="address-container">
                <div className="aside">
                    <strong>Endereço</strong>
                    
                    <div className="input-group-address">
                        <input {...register("address.number")} />
                        <input {...register("address.street")} />
                        <input {...register("address.number")} />
                        <input {...register("address.street")} />
                        <input {...register("address.number")} />
                        <input {...register("address.street")} />
                    </div>
                </div>
            </div>

            
            <input type="submit" />
        </Formulary>
    );
}