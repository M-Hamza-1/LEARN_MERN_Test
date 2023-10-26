# The TypeScript Compiler

## Configuring the TypeSript Compiler

# -----------------------

## 1. `Watch Mode` :

    - `watch mode` is a feature of the TypeScript compiler that allows you to keep the compiler running in the background, watching for changes to your TypeScript files and recompiling them every time you save.
    - It's just like `nodemon` for `node.js` or `live-server` for `html` files.


       ```bash
       tsc <filename> --watch
       ```

## 2. `tsconfig.json` :

- when we need to compile multiple .ts files in same directory then we can use we use `tsc init` command to create `tsconfig.json` file.

  - `tsconfig.json` file contains all the configuration of the typescript compiler. for that project.
  - `tsconfig.json` file is used to configure the typescript compiler.
  - after using `tsc init` command we can use `tsc` command to compile all the `.ts` files in the same directory.
  - use `watch mode` with `tsconfig.json` file. use command `tsc -w` to compile all the `.ts` files in the same directory.

  ### enable tsconfig.json file to compile all the .ts files in the same directory.

  ```bash
  tsc --init
   // then watch mode
  tsc -w

  ```


### tsconfig.json file

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}
```

 - tsconfig.json file contains all the configuration of the typescript compiler. for that project. using this file we can configure the typescript compiler. Based on our own use case.
 - `compilerOptions` : this object contains all the configuration of the typescript compiler.

** for`eg :` `exclude` & `include` properties are used to exclude and include the files to compile.

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  },
  "exclude": ["node_modules"],
  "include": [""] // include all the files in the same directory. 

}
```


### some important properties of `compilerOptions` object.

* `compilerOptions` helps us to configure the typescript compiler for which file we want to compile and how we want to compile.

 - `target` : this property is used to specify the version of javascript we want to compile our typescript code to. for eg : `es5` or `es6` or `es2015` or `es2016` or `es2017` or `es2018` or `es2019` or `es2020` or `esnext` etc.
 - `module` : this property is used to specify the module system we want to use. for eg : `commonjs` or `amd` or `system` or `umd` or `es2015` or `esnext` etc.
 - `lib` : this property is used to specify the library files we want to use. for eg : `dom` or `dom.iterable` or `esnext` or `es2015` or `es2016` or `es2017` or `es2018` or `es2019` or `es2020` etc. some of them are already included by default.

  ```js
  // for eg :
  "lib": ["dom", "dom.iterable", "esnext"] // now typescript will recongise all the dom related methods and properties like document object from dom.
  ```
  ``` 

- `sourceMap` : this property is used to generate the source map file.  if we sets as `true` then it will generate the source map file. in response we can able to run our typescript code in the browser. 
 
  ```js
  // for eg :
  "sourceMap": true // now typescript will generate the source map file with extention .js.map file.
  ```
 
- `outDir` : this property is used to specify the output directory. for eg : `./dist` or `./build` etc then typescript will compile all the `.ts` files in the same directory and put all the `.js` files in the specified directory let say here `./dist` directory.

  ```js 
  // for eg :
  "outDir": "./dist" 

 ```

  - `rootDir` : this property is used to specify the root directory. for eg : `./src` or `./src/app` etc. Now all .ts file are compile available in the root directory. let say here `./src` directory also folder structure gonna replicated into ./dist file after compilation of .ts files.

  ```js
  // for eg :
  "rootDir": "./src" 

  - `noEmmitOnError` : this property is used to specify the no emmit on error. for eg : `true` or `false`. if we set as `true` then typescript will not compile the .ts files if there is any error in the .ts files. if we set as `false` then typescript will compile the .ts files even if there is any error in the .ts files.

  ```js
  // for eg :
  "noEmmitOnError": true 
  ```


  - `strict` : enable all strict type-checking options like `noImplicitAny`, `noImplicitThis`, `alwaysStrict`, `strictBindCallApply`, `strictNullChecks`, `strictFunctionTypes`, `strictPropertyInitialization`, `noImplicitReturns`, `noFallthroughCasesInSwitch`, `esModuleInterop` etc. for eg : `true` or `false`. if we set as `true` then typescript will enable all the strict type-checking options. if we set as `false` then typescript will disable all the strict type-checking options.



   
    



 