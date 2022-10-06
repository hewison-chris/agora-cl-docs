import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export const MultiDimensionalContentWidget = () => {

	let getAllTabElements = function () {
		var tabElements = document.querySelectorAll('.quickstart-tabs .tabs__item');
		return tabElements;
	}

	let getByText = function (text) {
		var allElements = getAllTabElements();
		var selectedElement;
		// docusaurus seems to be stripping away some array extensions like find()...
		allElements.forEach(el => {
			if (el.innerHTML == text) {
				selectedElement = el;
			}
		})
		return selectedElement;
	}

	let disableByText = function (text) {
		var targetElement = getByText(text);
		targetElement.classList.add('disabled-tab');
	}

	let enableByText = function (text) {
		var targetElement = getByText(text);
		targetElement.classList.remove('disabled-tab');
	}

	let selectByText = function (text) {
		console.log("selecting " + text + '...');
		var targetElement = getByText(text);
		targetElement.click();
	}

	let isSelectedByText = function (text) {
		var targetElement = getByText(text);
		var isSelected = targetElement.classList.contains('tabs__item--active');
		return isSelected;
	}

	let scrollDownASmidge = function () {
		window.scrollBy(0, 10)
	}

	let toggleUpdated = function (element) {
		var parent = element.parentElement;
		parent.classList.remove('updated');
		parent.classList.add('updated');
		setTimeout(function () {
			parent.classList.remove('updated');
		}, 2000)
	}

	let stashConfig = function () {
		var selectedOS, selectedNetwork, selectedEL, selectedENBN;

		if (isSelectedByText('Windows'))
			selectedOS = "Windows";
		else
			selectedOS = "Linux, MacOS, Arm64";

		if (isSelectedByText('Mainnet'))
			selectedNetwork = "Mainnet";
		else if (isSelectedByText('Testnet'))
			selectedNetwork = "Testnet";

		if (isSelectedByText('Agora-el'))
			selectedEL = "Agora-el";

		if (isSelectedByText('IPC'))
			selectedENBN = "IPC";
		else
			selectedENBN = "HTTP-JWT";

		var tabWidget = document.querySelector('.quickstart-tabs');
		tabWidget.dataset.selectedOS = selectedOS;
		tabWidget.dataset.selectedNetwork = selectedNetwork;
		tabWidget.dataset.selectedEL = selectedEL;
		tabWidget.dataset.selectedENBN = selectedENBN;
	}

	let bindTabs = function () {
		setTimeout(function () {
			if (jwtOnly()) {
				setTimeout(function () { selectByText('HTTP-JWT'); stashConfig(); }, 50)
				disableByText('IPC');
			}

			var tabElements = getAllTabElements();
			tabElements.forEach(element => {
				var isLabel = element.textContent.indexOf(":") > -1;

				if (isLabel) {
					// unbind so tab can't be selected
					element.outerHTML = element.outerHTML;
				} else {
					element.addEventListener("click", function (event) {
						var targetElement = event.target;
						var textContent = targetElement.textContent;

						if (textContent == 'Agora-el') {
							enableByText('IPC');
						} else if (textContent == 'IPC') {
							if (jwtOnly()) {
								setTimeout(function () { selectByText('HTTP-JWT'); }, 50)
								disableByText('IPC');
							} else {
								selectByText('Agora-el');
							}
						}
						toggleUpdated(targetElement);
						stashConfig();
					}, false)
				}
			});
			stashConfig();
		}, 100)
	}

	return (
		<BrowserOnly>
			{() => { bindTabs() }}
		</BrowserOnly>
	);
};
