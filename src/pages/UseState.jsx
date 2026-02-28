import { StudyBlock } from "../components/StudyBlock";
import { Counter } from "../components/Counter";
import { BotaoCurtir } from "../components/BotaoCurtir";

const code = `const [valor, setValor] = useState(0);
// valor = estado atual, setValor = função para atualizar`;

export default function UseState() {
  return (
    <StudyBlock
      title="useState"
      description="useState é um hook que permite guardar um valor que pode mudar. Quando você chama setValor, o React re-renderiza o componente."
      code={code}
    >
      <Counter />
      <BotaoCurtir />
    </StudyBlock>
  );
}
