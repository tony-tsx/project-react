import { Component } from 'react'

class LifeCycleComponent extends Component {
  constructor( props ) {
    super( props )
    this.state = {}
  }

  /**
   * descontinuado futurament removido do react
   * UNSAFE_componentWillMount
   * Executado antes do componente ser montado ( render executado pela primeira vez )
   */
  componentWillMount() {}
  UNSAFE_componentWillMount() {}
  
  /**
   * Executado depois que o componente for montado ( depois que o render set executado pela primeira vez )
   */
  componentDidMount() {
    console.log( 'o componentDidMount foi chamado no LifeCycleComponent' )
  }

  /**
   * descontinuado futurament removido do react
   * UNSAFE_componentWillReceiveProps
   * Antes de receber novas propriedades.
   * Apenas é executado quando o pai ( parent ) for atualizado.
   */
  componentWillReceiveProps( nextProps ) {}  // -> descontinuado
  UNSAFE_componentWillReceiveProps( nextProps ) {}

  /**
   * Executando antes de receber novas propriedades ou um novo estado.
   * Responsavel por prevenir renderizações desnecessarias com valores boolean.
   * Recebe as novas propriedades e o novo estado.
   * 
   * @param {*} nextProps proximas propriedades
   * @param {*} nextState proximo stato
   * @return {boolean}
   */
  shouldComponentUpdate( nextProps, nextState ) {
    /**
     * Warning: usar com cuidado atualizações de estado dentro do shouldComponentUpdate
     */
    // this.setState( {} )
    return true
  }

  /**
   * descontinuado futurament removido do react
   * UNSAFE_componentWillUpdate
   * Executado antes do componente sofrer atualização ( antes do render ser executado )
   */
  componentWillUpdate() {
    /**
     * Warning: usar com cuidado atualizações de estado dentro do componentWillUpdate | UNSAFE_componentWillUpdate
     */
    // this.setState( {} )
  }
  UNSAFE_componentWillUpdate() {}

  /**
   * Executado depois do componente sofrer atualização ( depois do render ser executado )
   */
  componentDidUpdate() {
    /**
     * Warning: usar com cuidado atualizações de estado dentro do componentDidUpdate
     */
    // this.setState( {} )
  }

  render() {
    return null
  }

  /**
   * Executado toda vez que o componente for desmontado.
   * **** Removido da arvore do react.
   */
  componentWillUnmount() {
    console.log( 'o componentWillUnmount foi chamado no LifeCycleComponent' )
  }
}

export default LifeCycleComponent
