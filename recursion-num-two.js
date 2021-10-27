'use strict'

function getDependencies(tree, dependencyArr) {
  dependencyArr = dependencyArr || [];
  let dependencies = (tree && tree.dependencies) || [];
  Object.keys(dependencies).forEach((depend) => {
    let keyVal = `${depend}@${tree.dependencies[depend].version}`
    if(dependencyArr.indexOf(keyVal) === -1) {
      dependencyArr.push(keyVal)
    }
    getDependencies(tree.dependencies[depend], dependencyArr)
  })
  console.log(dependencyArr.sort())
  return dependencyArr.sort();
}
module.exports= getDependencies;

/*
-Return key + "@" + value
-Keys sorted alphabetically
-Duplicate modules of same version should be removed

Useful methods:
Object.values(objName) - saves values into array
Object.keys(objName) - saves keys into array
Object.entries(tree) - creates an array of keys and values
*/
