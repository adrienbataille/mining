declare module 'typed-immutable' {
  import * as Immutable from 'immutable';

  interface Record extends Immutable.Record.Class { }
  interface List<T> extends Immutable.List<T> { }

  interface Map { new(data : Object): Map }
  interface Maybe { new(data : any): Maybe }
  interface Any { new(data : any): Any }
  interface Typed { new(data: any): Typed }

  function Record(descriptor: Object) : Record
  function Record(descriptor: Object, label: string) : Record

  function List<T>(descriptor: T) : List<T>
  function List<T>(descriptor: T, label: string) : List<T>

  function Maybe(type: any) : Maybe;
  function Any(value: any) : Any;

  function Typed(label: string, callback: (value:any) => any) : Typed
}
